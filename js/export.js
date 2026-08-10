/* ============================================================
   V466 RUNESTONE — BUILDER EXPORT (Stage 5)
   - Export Build: structured JSON, human-readable, re-editable.
   - Export Image: a fixed-layout share card (not a screenshot),
     drawn on a canvas. Empty groups are skipped entirely; a
     partially-filled group shows a muted "not set" placeholder
     for the missing item so the card doesn't look lopsided.
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

/* ---------------- Export Build (JSON) ---------------- */
function buildExportJSON() {
  const commanderJSON = (key) => {
    const a = resolveCommanderAssets(key);
    return {
      hero: a.hero ? a.hero.label : null,
      skills: a.skills.map((s) => (s ? s.label : null)),
      mount: a.mount ? a.mount.label : null,
      mountSkills: a.mountSkills.map((s) => (s ? s.label : null)),
    };
  };
  const equipJSON = (key) => resolveEquipmentAssets(key).map((e) => (e ? e.label : null));

  return {
    title: "V466 Runestone — Custom March Build",
    exportedAt: new Date().toISOString(),
    mainCommander: commanderJSON("main"),
    secondaryCommander: commanderJSON("secondary"),
    equipment1: equipJSON("equipment1"),
    equipment2: equipJSON("equipment2"),
  };
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

function exportBuildJSON() {
  const data = buildExportJSON();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  triggerDownload(blob, "v466-runestone-march-build.json");
  showExportStatus(t("builder.exportBuildDone"));
}

/* ---------------- Export Image (share card) ---------------- */
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

// Draw one square slot: filled (image), empty-but-group-has-content (muted "not set"),
// or fully skipped by the caller before this is ever invoked.
async function drawSlot(ctx, asset, x, y, size, options) {
  const opts = options || {};
  drawRoundedRect(ctx, x, y, size, size, opts.radius || 8);
  ctx.fillStyle = "#141922";
  ctx.fill();
  ctx.strokeStyle = asset ? "#c69a5c" : "#2a3240";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  if (asset) {
    const img = await loadImageSafe(asset.image);
    ctx.save();
    drawRoundedRect(ctx, x, y, size, size, opts.radius || 8);
    ctx.clip();
    if (img) {
      ctx.drawImage(img, x, y, size, size);
    } else {
      ctx.fillStyle = "#1a212c";
      ctx.fillRect(x, y, size, size);
      ctx.fillStyle = "#e8c77e";
      ctx.font = `600 ${Math.floor(size * 0.35)}px Georgia, serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(asset.label.charAt(0).toUpperCase(), x + size / 2, y + size / 2 + 2);
    }
    ctx.restore();
  } else if (opts.showEmptyMark) {
    ctx.strokeStyle = "#454d5d";
    ctx.lineWidth = 2;
    const pad = size * 0.32;
    ctx.beginPath();
    ctx.moveTo(x + pad, y + pad);
    ctx.lineTo(x + size - pad, y + size - pad);
    ctx.moveTo(x + size - pad, y + pad);
    ctx.lineTo(x + pad, y + size - pad);
    ctx.stroke();
  }
}

function drawLabel(ctx, text, x, y, maxWidth, opts) {
  const o = opts || {};
  ctx.font = `${o.weight || 500} ${o.size || 13}px Inter, Arial, sans-serif`;
  ctx.fillStyle = o.color || "#a7afc0";
  ctx.textAlign = o.align || "left";
  ctx.textBaseline = "top";
  ctx.fillText(truncateToWidth(ctx, text, maxWidth), x, y, maxWidth);
}

async function drawCommanderPanel(ctx, x, y, w, h, commanderKey, titleText) {
  drawRoundedRect(ctx, x, y, w, h, 14);
  ctx.fillStyle = "#141922";
  ctx.fill();
  ctx.strokeStyle = "#262f3d";
  ctx.lineWidth = 1;
  ctx.stroke();

  const pad = 22;
  drawLabel(ctx, titleText.toUpperCase(), x + pad, y + pad, w - pad * 2, { size: 15, weight: 700, color: "#e8c77e" });

  const a = resolveCommanderAssets(commanderKey);
  const hasHeroRow = a.hero || a.skills.some(Boolean);
  const hasMountRow = a.mount || a.mountSkills.some(Boolean);

  let cursorY = y + pad + 34;
  const innerW = w - pad * 2;

  if (hasHeroRow) {
    const heroSize = Math.min(innerW * 0.58, h * 0.42);
    const skillSize = (heroSize - 8) / 2;
    await drawSlot(ctx, a.hero, x + pad, cursorY, heroSize, { showEmptyMark: true });
    if (a.hero) drawLabel(ctx, a.hero.label, x + pad, cursorY + heroSize + 6, heroSize, { size: 12, color: "#e7e9ee", weight: 600 });

    const skillX = x + pad + heroSize + 10;
    await drawSlot(ctx, a.skills[0], skillX, cursorY, skillSize, { showEmptyMark: true, radius: 7 });
    await drawSlot(ctx, a.skills[1], skillX, cursorY + skillSize + 8, skillSize, { showEmptyMark: true, radius: 7 });
    if (a.skills[0]) drawLabel(ctx, a.skills[0].label, skillX, cursorY + skillSize + 4, skillSize + 60, { size: 10.5, color: "#8a93a6" });
    if (a.skills[1]) drawLabel(ctx, a.skills[1].label, skillX, cursorY + skillSize * 2 + 12, skillSize + 60, { size: 10.5, color: "#8a93a6" });

    cursorY += heroSize + 30;
  }

  if (hasMountRow) {
    const rowH = Math.min(70, h - (cursorY - y) - pad);
    if (rowH > 30) {
      const msSize = (rowH - 6) / 2;
      await drawSlot(ctx, a.mountSkills[0], x + pad, cursorY, msSize, { showEmptyMark: true, radius: 6 });
      await drawSlot(ctx, a.mountSkills[1], x + pad, cursorY + msSize + 6, msSize, { showEmptyMark: true, radius: 6 });

      const mountX = x + pad + msSize + 10;
      const mountW = innerW - msSize - 10;
      drawRoundedRect(ctx, mountX, cursorY, mountW, rowH, 6);
      ctx.fillStyle = "#141922";
      ctx.fill();
      ctx.strokeStyle = a.mount ? "#c69a5c" : "#2a3240";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      if (a.mount) {
        const img = await loadImageSafe(a.mount.image);
        ctx.save();
        drawRoundedRect(ctx, mountX, cursorY, mountW, rowH, 6);
        ctx.clip();
        if (img) ctx.drawImage(img, mountX, cursorY, mountW, rowH);
        ctx.restore();
        drawLabel(ctx, a.mount.label, mountX + 8, cursorY + rowH + 6, mountW, { size: 11.5, color: "#e7e9ee", weight: 600 });
      }
    }
  }

  if (!hasHeroRow && !hasMountRow) {
    drawLabel(ctx, "—", x + pad, y + h / 2, innerW, { size: 14, color: "#454d5d" });
  }
}

async function drawEquipmentPanel(ctx, x, y, w, h) {
  drawRoundedRect(ctx, x, y, w, h, 14);
  ctx.fillStyle = "#141922";
  ctx.fill();
  ctx.strokeStyle = "#262f3d";
  ctx.lineWidth = 1;
  ctx.stroke();

  const pad = 22;
  drawLabel(ctx, t("builder.equipmentTitle").toUpperCase(), x + pad, y + pad, w - pad * 2, { size: 15, weight: 700, color: "#e8c77e" });

  const sets = [
    { key: "equipment1", label: `${t("builder.equipmentTitle")} 1` },
    { key: "equipment2", label: `${t("builder.equipmentTitle")} 2` },
  ];
  const innerW = w - pad * 2;
  const setH = (h - pad * 2 - 40 - 20) / 2;
  let cursorY = y + pad + 34;

  for (const set of sets) {
    const items = resolveEquipmentAssets(set.key);
    const hasAny = items.some(Boolean);
    drawLabel(ctx, set.label, x + pad, cursorY, innerW, { size: 11, color: "#6e7789", weight: 600 });
    const rowY = cursorY + 18;
    const cell = Math.min((innerW - 30) / 4, setH - 18);
    let cx = x + pad;
    for (const item of items) {
      await drawSlot(ctx, item, cx, rowY, cell, { showEmptyMark: hasAny, radius: 6 });
      cx += cell + 10;
    }
    cursorY += setH + 20;
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
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1000;
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
    ctx.font = "700 40px Georgia, serif";
    ctx.fillText("V466 Runestone", 48, 44);
    ctx.fillStyle = "#8a93a6";
    ctx.font = "500 16px Inter, Arial, sans-serif";
    ctx.fillText("Custom March Build", 48, 96);

    // Panels
    const top = 150, bottom = 950, gap = 28;
    const colW = (1600 - 48 * 2 - gap * 2) / 3;
    await drawCommanderPanel(ctx, 48, top, colW, bottom - top, "main", t("builder.mainCommanderLabel"));
    await drawCommanderPanel(ctx, 48 + colW + gap, top, colW, bottom - top, "secondary", t("builder.secondaryCommanderLabel"));
    await drawEquipmentPanel(ctx, 48 + (colW + gap) * 2, top, colW, bottom - top);

    // Footer
    ctx.fillStyle = "#454d5d";
    ctx.font = "400 12px monospace";
    ctx.textAlign = "right";
    ctx.fillText(`Kingdom #466 — generated ${new Date().toLocaleDateString()}`, 1552, 968);

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
