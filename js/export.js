/* ============================================================
   V466 RUNESTONE — BUILDER EXPORT (Stage 5)
   Share-card PNG, drawn on a canvas (not a screenshot).
   - Panel height is computed from actual content, not a fixed
     tall box — no more empty space under short builds.
   - Images are drawn "cover" fit (crop to fill, like the site's
     CSS), never stretched — fixes the distorted mount rectangle.
   - Empty groups are skipped entirely; a partially-filled group
     shows a muted "×" placeholder for the missing item so the
     card doesn't look lopsided.
   ============================================================ */

function isBuildEmpty() {
  const p = builderPlacement;
  const anyCommander = (c) => c.hero || c.skill0 || c.skill1 || c.mount || c.mountSkill0 || c.mountSkill1;
  const anyEquip = (arr) => arr.some(Boolean);
  return !anyCommander(p.main) && !anyCommander(p.secondary) && !anyEquip(p.equipment1) && !anyEquip(p.equipment2);
}

function resolveCommanderAssets(commanderKey) {
  const p = builderPlacement[commanderKey];
  return {
    hero: p.hero ? findAsset("heroes", p.hero) : null,
    skills: [p.skill0, p.skill1].map((id) => (id ? findAsset("heroSkills", id) : null)),
    mount: p.mount ? findAsset("mounts", p.mount) : null,
    mountSkills: [p.mountSkill0, p.mountSkill1].map((id) => (id ? findAsset("mountSkills", id) : null)),
  };
}

function resolveEquipmentAssets(scopeKey) {
  return builderPlacement[scopeKey].map((id) => (id ? findAsset("equipment", id) : null));
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ---------------- Drawing primitives ---------------- */
function loadImageSafe(src) {
  return new Promise((resolve) => {
    if (!src) { resolve(null); return; }
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function truncateToWidth(ctx, text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let s = text;
  while (s.length > 1 && ctx.measureText(s + "…").width > maxWidth) {
    s = s.slice(0, -1);
  }
  return s + "…";
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Crop-to-fill draw, equivalent to CSS object-fit:cover — never stretches.
function drawImageCover(ctx, img, x, y, w, h) {
  const ir = img.width / img.height;
  const dr = w / h;
  let sx, sy, sw, sh;
  if (ir > dr) {
    sh = img.height;
    sw = sh * dr;
    sy = 0;
    sx = (img.width - sw) / 2;
  } else {
    sw = img.width;
    sh = sw / dr;
    sx = 0;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}

function drawLabel(ctx, text, x, y, maxWidth, opts) {
  const o = opts || {};
  ctx.font = `${o.weight || 500} ${o.size || 13}px Inter, Arial, sans-serif`;
  ctx.fillStyle = o.color || "#a7afc0";
  ctx.textAlign = o.align || "left";
  ctx.textBaseline = "top";
  ctx.fillText(truncateToWidth(ctx, text, maxWidth), x, y, maxWidth);
}

// One image slot: filled, empty-with-a-muted-× (group has other content),
// or fully blank (group has nothing at all — caller decides via showEmptyMark).
async function drawSlot(ctx, asset, x, y, w, h, options) {
  const opts = options || {};
  const r = opts.radius || 8;
  drawRoundedRect(ctx, x, y, w, h, r);
  ctx.fillStyle = "#141922";
  ctx.fill();
  ctx.strokeStyle = asset ? "#c69a5c" : "#2a3240";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  if (asset) {
    const img = await loadImageSafe(asset.image);
    ctx.save();
    drawRoundedRect(ctx, x, y, w, h, r);
    ctx.clip();
    if (img) {
      drawImageCover(ctx, img, x, y, w, h);
    } else {
      ctx.fillStyle = "#1a212c";
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = "#e8c77e";
      ctx.font = `600 ${Math.floor(Math.min(w, h) * 0.35)}px Georgia, serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(asset.label.charAt(0).toUpperCase(), x + w / 2, y + h / 2 + 2);
    }
    ctx.restore();
  } else if (opts.showEmptyMark) {
    ctx.strokeStyle = "#454d5d";
    ctx.lineWidth = 2;
    const padX = w * 0.3, padY = h * 0.3;
    ctx.beginPath();
    ctx.moveTo(x + padX, y + padY);
    ctx.lineTo(x + w - padX, y + h - padY);
    ctx.moveTo(x + w - padX, y + padY);
    ctx.lineTo(x + padX, y + h - padY);
    ctx.stroke();
  }
}

/* ---------------- Layout: sizes derived purely from column width,
   so panel heights can be computed BEFORE drawing anything. ---------------- */
function computeLayoutSizes(colW) {
  const pad = 24;
  const titleH = 32;
  const innerW = colW - pad * 2;
  const heroSize = innerW * 0.56;
  // Skills column must total the same height as the hero square, with its
  // own label reserved per skill (not shared with the next skill's slot).
  const skillLabelH = 12;
  const skillGap = 6;
  const skillSize = (heroSize - skillLabelH * 2 - 8 - skillGap) / 2;
  const mountRowH = 62;
  const cellSize = (innerW - 30) / 4;
  return { pad, titleH, innerW, heroSize, skillSize, skillLabelH, skillGap, mountRowH, cellSize };
}

function commanderContentHeight(a, s) {
  const hasHeroRow = !!(a.hero || a.skills.some(Boolean));
  const hasMountRow = !!(a.mount || a.mountSkills.some(Boolean));
  let h = s.pad + s.titleH;
  if (hasHeroRow) h += s.heroSize + 8 + 16 + 20;
  if (hasMountRow) h += s.mountRowH + 8 + 16;
  if (!hasHeroRow && !hasMountRow) h += 24;
  h += s.pad;
  return { h, hasHeroRow, hasMountRow };
}

function equipmentContentHeight(s, hasEquip1, hasEquip2) {
  const setBlockH = 16 + 6 + s.cellSize;
  let h = s.pad + s.titleH;
  if (hasEquip1) h += setBlockH;
  if (hasEquip1 && hasEquip2) h += 18;
  if (hasEquip2) h += setBlockH;
  if (!hasEquip1 && !hasEquip2) h += 24;
  h += s.pad;
  return h;
}

/* ---------------- Panel drawing ---------------- */
async function drawCommanderPanel(ctx, x, y, w, h, commanderKey, titleText, s) {
  drawRoundedRect(ctx, x, y, w, h, 14);
  ctx.fillStyle = "#141922";
  ctx.fill();
  ctx.strokeStyle = "#262f3d";
  ctx.lineWidth = 1;
  ctx.stroke();

  drawLabel(ctx, titleText.toUpperCase(), x + s.pad, y + s.pad, w - s.pad * 2, { size: 15, weight: 700, color: "#e8c77e" });

  const a = resolveCommanderAssets(commanderKey);
  const { hasHeroRow, hasMountRow } = commanderContentHeight(a, s);
  let cursorY = y + s.pad + s.titleH;

  if (hasHeroRow) {
    await drawSlot(ctx, a.hero, x + s.pad, cursorY, s.heroSize, s.heroSize, { showEmptyMark: true });
    if (a.hero) drawLabel(ctx, a.hero.label, x + s.pad, cursorY + s.heroSize + 8, s.heroSize, { size: 12, color: "#e7e9ee", weight: 600 });

    const skillX = x + s.pad + s.heroSize + 10;
    const skill1Y = cursorY;
    const skill2Y = skill1Y + s.skillSize + 4 + s.skillLabelH + s.skillGap;
    await drawSlot(ctx, a.skills[0], skillX, skill1Y, s.skillSize, s.skillSize, { showEmptyMark: true, radius: 7 });
    await drawSlot(ctx, a.skills[1], skillX, skill2Y, s.skillSize, s.skillSize, { showEmptyMark: true, radius: 7 });
    if (a.skills[0]) drawLabel(ctx, a.skills[0].label, skillX, skill1Y + s.skillSize + 4, s.skillSize + 70, { size: 10.5, color: "#8a93a6" });
    if (a.skills[1]) drawLabel(ctx, a.skills[1].label, skillX, skill2Y + s.skillSize + 4, s.skillSize + 70, { size: 10.5, color: "#8a93a6" });

    cursorY += s.heroSize + 8 + 16 + 20;
  }

  if (hasMountRow) {
    const msSize = (s.mountRowH - 6) / 2;
    await drawSlot(ctx, a.mountSkills[0], x + s.pad, cursorY, msSize, msSize, { showEmptyMark: true, radius: 6 });
    await drawSlot(ctx, a.mountSkills[1], x + s.pad, cursorY + msSize + 6, msSize, msSize, { showEmptyMark: true, radius: 6 });

    const mountX = x + s.pad + msSize + 10;
    const mountW = s.innerW - msSize - 10;
    await drawSlot(ctx, a.mount, mountX, cursorY, mountW, s.mountRowH, { showEmptyMark: true, radius: 6 });
    if (a.mount) drawLabel(ctx, a.mount.label, mountX, cursorY + s.mountRowH + 8, mountW, { size: 11.5, color: "#e7e9ee", weight: 600 });
  }

  if (!hasHeroRow && !hasMountRow) {
    drawLabel(ctx, "—", x + s.pad, cursorY, s.innerW, { size: 14, color: "#454d5d" });
  }
}

async function drawEquipmentPanel(ctx, x, y, w, h, s, equip1Items, equip2Items) {
  drawRoundedRect(ctx, x, y, w, h, 14);
  ctx.fillStyle = "#141922";
  ctx.fill();
  ctx.strokeStyle = "#262f3d";
  ctx.lineWidth = 1;
  ctx.stroke();

  drawLabel(ctx, t("builder.equipmentTitle").toUpperCase(), x + s.pad, y + s.pad, w - s.pad * 2, { size: 15, weight: 700, color: "#e8c77e" });

  const sets = [];
  if (equip1Items.some(Boolean)) sets.push({ items: equip1Items, label: `${t("builder.equipmentTitle")} 1` });
  if (equip2Items.some(Boolean)) sets.push({ items: equip2Items, label: `${t("builder.equipmentTitle")} 2` });

  let cursorY = y + s.pad + s.titleH;
  for (const set of sets) {
    drawLabel(ctx, set.label, x + s.pad, cursorY, s.innerW, { size: 11, color: "#6e7789", weight: 600 });
    const rowY = cursorY + 16 + 6;
    let cx = x + s.pad;
    for (const item of set.items) {
      await drawSlot(ctx, item, cx, rowY, s.cellSize, s.cellSize, { showEmptyMark: true, radius: 6 });
      cx += s.cellSize + 10;
    }
    cursorY += 16 + 6 + s.cellSize + 18;
  }
}

function showExportStatus(message, isError) {
  const el = document.getElementById("export-status");
  if (!el) return;
  el.textContent = message;
  el.style.color = isError ? "var(--status-danger)" : "var(--status-good)";
  el.style.opacity = "1";
  clearTimeout(showExportStatus._t);
  showExportStatus._t = setTimeout(() => { el.style.opacity = "0"; }, 4500);
}

async function exportShareImage() {
  const btn = document.getElementById("export-image-btn");
  if (btn) { btn.disabled = true; btn.style.opacity = "0.6"; }

  try {
    const canvasW = 1600;
    const marginX = 48, gap = 28, top = 130;

    const equip1Items = resolveEquipmentAssets("equipment1");
    const equip2Items = resolveEquipmentAssets("equipment2");
    const hasEquip1 = equip1Items.some(Boolean);
    const hasEquip2 = equip2Items.some(Boolean);
    const hasAnyEquip = hasEquip1 || hasEquip2;

    const numCols = hasAnyEquip ? 3 : 2;
    const colW = (canvasW - marginX * 2 - gap * (numCols - 1)) / numCols;
    const s = computeLayoutSizes(colW);

    const mainA = resolveCommanderAssets("main");
    const secA = resolveCommanderAssets("secondary");
    const mainH = commanderContentHeight(mainA, s).h;
    const secH = commanderContentHeight(secA, s).h;
    const equipH = hasAnyEquip ? equipmentContentHeight(s, hasEquip1, hasEquip2) : 0;
    const panelH = Math.max(mainH, secH, equipH, 220);
    const canvasH = top + panelH + 70;

    const canvas = document.createElement("canvas");
    canvas.width = canvasW;
    canvas.height = canvasH;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "#0b0e14";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const glow = ctx.createRadialGradient(280, 0, 0, 280, 0, 700);
    glow.addColorStop(0, "rgba(74,158,219,0.08)");
    glow.addColorStop(1, "rgba(74,158,219,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "#f1dca5";
    ctx.font = "700 36px Georgia, serif";
    ctx.fillText("V466 Runestone", marginX, 36);
    ctx.fillStyle = "#8a93a6";
    ctx.font = "500 15px Inter, Arial, sans-serif";
    ctx.fillText("Custom March Build", marginX, 80);

    // Panels
    await drawCommanderPanel(ctx, marginX, top, colW, panelH, "main", t("builder.mainCommanderLabel"), s);
    await drawCommanderPanel(ctx, marginX + colW + gap, top, colW, panelH, "secondary", t("builder.secondaryCommanderLabel"), s);
    if (hasAnyEquip) {
      await drawEquipmentPanel(ctx, marginX + (colW + gap) * 2, top, colW, panelH, s, equip1Items, equip2Items);
    }

    // Footer
    ctx.fillStyle = "#454d5d";
    ctx.font = "400 12px monospace";
    ctx.textAlign = "right";
    ctx.fillText(`Kingdom #466 — generated ${new Date().toLocaleDateString()}`, canvasW - marginX, canvasH - 32);

    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob returned null"))), "image/png");
    });
    triggerDownload(blob, "v466-runestone-march-build.png");
    showExportStatus(t("builder.exportImageDone"));
  } catch (err) {
    console.error("Export image failed:", err);
    showExportStatus(t("builder.exportImageError"), true);
  } finally {
    if (btn) { btn.disabled = false; btn.style.opacity = ""; }
  }
}
