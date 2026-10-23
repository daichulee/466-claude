/* ============================================================
   V466 RUNESTONE — CREATE MARCH BUILDER
   Stage 4: interaction.
   - Tap a library item to select it ("Ready to place: X"),
     then tap a matching slot to place it. Tap again to deselect.
   - Tap a filled slot (with nothing selected) to clear it.
   - Desktop: drag a library item straight onto a matching slot.
   Export (Stage 5) is still a stub on the Review step.
   ============================================================ */

const BUILDER_STEPS = [
  { id: "heroes", labelKey: "builder.step.heroes", category: "heroes" },
  { id: "heroSkills", labelKey: "builder.step.heroSkills", category: "heroSkills" },
  { id: "mounts", labelKey: "builder.step.mounts", category: "mounts" },
  { id: "mountSkills", labelKey: "builder.step.mountSkills", category: "mountSkills" },
  { id: "equipment", labelKey: "builder.step.equipment", category: "equipment" },
  { id: "review", labelKey: "builder.step.review", category: null },
];

const TROOP_TYPES = ["all", "infantry", "archers", "pikemen", "gathering"];

let builderStep = "heroes";
let builderTroopFilter = "all";
let builderSelection = null; // { category, id } — the library item currently "picked up"

let builderPlacement = {
  main: { hero: null, skill0: null, skill1: null, mount: null, mountSkill0: null, mountSkill1: null },
  secondary: { hero: null, skill0: null, skill1: null, mount: null, mountSkill0: null, mountSkill1: null },
  equipment1: [null, null, null, null],
  equipment2: [null, null, null, null],
};

function getSlotValue(targetId) {
  const [scope, key] = targetId.split("__");
  if (scope === "equipment1" || scope === "equipment2") return builderPlacement[scope][Number(key)];
  return builderPlacement[scope][key];
}

function setSlotValue(targetId, value) {
  const [scope, key] = targetId.split("__");
  if (scope === "equipment1" || scope === "equipment2") {
    builderPlacement[scope][Number(key)] = value;
    return;
  }
  builderPlacement[scope][key] = value;
}

/* ---------------- Slot rendering ---------------- */
function slotFillContent(asset, isSquare) {
  const letter = asset.label.charAt(0).toUpperCase();
  if (isSquare) {
    return `
      <img src="${asset.image}" alt="${asset.label}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="b-slot-fallback" style="display:none;">${letter}</div>
      <button class="b-slot-remove" data-remove="1" title="Remove">×</button>
    `;
  }
  return `
    <div class="b-slot-row-thumb">
      <img src="${asset.image}" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="b-slot-row-fallback" style="display:none;">${letter}</div>
    </div>
    <span class="b-slot-row-name">${asset.label}</span>
    <button class="b-slot-remove" data-remove="1" title="Remove">×</button>
  `;
}

function slotHTML(targetId, category, sizeClass, labelKey, isSquare) {
  const value = getSlotValue(targetId);
  const asset = value ? findAsset(category, value) : null;
  const selectable = builderSelection && builderSelection.category === category;
  const cls = [sizeClass, asset ? "filled" : "", selectable ? "slot-can-accept" : ""].filter(Boolean).join(" ");
  const content = asset
    ? slotFillContent(asset, isSquare)
    : `${ICONS.plus}<span class="b-slot-label">${t(labelKey)}</span>`;
  const titleAttr = asset ? ` title="${asset.label}"` : "";
  return `<div class="b-slot ${cls}" data-target="${targetId}" data-category="${category}"${titleAttr}>${content}</div>`;
}

function commanderBlockHTML(commanderKey, labelKey) {
  return `
    <div class="commander-block">
      <div class="commander-block-header">${ICONS.shield}<span>${t(labelKey)}</span></div>
      <div class="cmdr-formation">
        <div class="cmdr-row-top">
          ${slotHTML(`${commanderKey}__hero`, "heroes", "cmdr-hero-slot", "builder.heroSlot", true)}
          <div class="cmdr-skills-col">
            ${slotHTML(`${commanderKey}__skill0`, "heroSkills", "cmdr-skill-slot", "builder.skillSlot", true)}
            ${slotHTML(`${commanderKey}__skill1`, "heroSkills", "cmdr-skill-slot", "builder.skillSlot", true)}
          </div>
        </div>
        <div class="cmdr-row-bottom">
          <div class="cmdr-mountskills-col">
            ${slotHTML(`${commanderKey}__mountSkill0`, "mountSkills", "cmdr-mountskill-slot", "builder.mountSkillSlot", true)}
            ${slotHTML(`${commanderKey}__mountSkill1`, "mountSkills", "cmdr-mountskill-slot", "builder.mountSkillSlot", true)}
          </div>
          ${slotHTML(`${commanderKey}__mount`, "mounts", "cmdr-mount-slot", "builder.mountSlot", true)}
        </div>
      </div>
    </div>
  `;
}

function equip2x2HTML(scopeKey, numberLabel) {
  return `
    <div class="equip-2x2-block">
      <div class="equip-2x2-label">${t("builder.equipmentTitle")} ${numberLabel}</div>
      <div class="equip-2x2-grid">
        ${[0, 1, 2, 3].map((i) => slotHTML(`${scopeKey}__${i}`, "equipment", "cmdr-equip-slot", "builder.skillSlot", true)).join("")}
      </div>
    </div>
  `;
}

function builderPreviewHTML() {
  return `
    <div class="builder-preview-row">
      ${commanderBlockHTML("main", "builder.mainCommanderLabel")}
      ${commanderBlockHTML("secondary", "builder.secondaryCommanderLabel")}
      <div class="equip-column">
        ${equip2x2HTML("equipment1", "1")}
        ${equip2x2HTML("equipment2", "2")}
      </div>
    </div>
  `;
}

/* ---------------- Library rendering ---------------- */
function libraryItemHTML(asset, sizeClass, category) {
  const selected = builderSelection && builderSelection.category === category && builderSelection.id === asset.id;
  return `
    <div class="library-item ${selected ? "selected" : ""}" data-category="${category}" data-id="${asset.id}" draggable="true">
      ${assetThumbHTML(asset, sizeClass)}
      <span class="library-item-label">${asset.label}</span>
    </div>
  `;
}

function renderLibraryForStep(stepId) {
  if (stepId === "heroes") {
    return `<div class="library-grid">${ASSET_CATALOG.heroes.map((a) => libraryItemHTML(a, "asset-thumb-lg", "heroes")).join("")}</div>`;
  }
  if (stepId === "heroSkills") {
    return `<div class="library-grid">${ASSET_CATALOG.heroSkills.map((a) => libraryItemHTML(a, "asset-thumb-lg", "heroSkills")).join("")}</div>`;
  }
  if (stepId === "mounts") {
    return `<div class="library-grid library-grid-mounts">${ASSET_CATALOG.mounts.map((a) => libraryItemHTML(a, "asset-thumb-mount", "mounts")).join("")}</div>`;
  }
  if (stepId === "mountSkills") {
    return `<div class="library-grid">${ASSET_CATALOG.mountSkills.map((a) => libraryItemHTML(a, "asset-thumb-lg", "mountSkills")).join("")}</div>`;
  }
  if (stepId === "equipment") {
    const filtered = builderTroopFilter === "all"
      ? ASSET_CATALOG.equipment
      : ASSET_CATALOG.equipment.filter((a) => a.troopType === builderTroopFilter);
    return `
      <div class="filter-bar" id="troop-filter-bar" style="margin-bottom:var(--sp-4);">
        ${TROOP_TYPES.map((tt) => `<button class="filter-chip ${tt === builderTroopFilter ? "active" : ""}" data-troop="${tt}">${t("builder.troop" + tt.charAt(0).toUpperCase() + tt.slice(1))}</button>`).join("")}
      </div>
      <div class="library-grid">${filtered.map((a) => libraryItemHTML(a, "asset-thumb-equip", "equipment")).join("")}</div>
    `;
  }
  return "";
}

function renderReviewStep() {
  const empty = isBuildEmpty();
  return `
    <div class="detail-panel">
      <p class="detail-p" style="max-width:none; margin-bottom:var(--sp-5);">${t("builder.reviewLede")}</p>
      <div class="export-row">
        <button class="export-btn" id="export-image-btn">
          ${ICONS.image}<span>${t("builder.exportImage")}</span>
        </button>
      </div>
      ${empty ? `<div class="coming-soon-note">${ICONS.info}<span>${t("builder.exportEmptyNote")}</span></div>` : ""}
      <div class="coming-soon-note" id="export-status" style="opacity:0; transition:opacity 0.2s ease; font-style:normal;"></div>
    </div>
  `;
}

/* ---------------- Main render ---------------- */
function renderMarchBuilder() {
  const view = document.getElementById("view");
  const selectedAsset = builderSelection ? findAsset(builderSelection.category, builderSelection.id) : null;

  view.innerHTML = `
    <div class="page-header">
      <div class="eyebrow"><a href="#/marches" style="color:var(--text-muted);">${t("marches.title")}</a> / ${t("builder.title")}</div>
      <h1>${t("builder.title")}</h1>
      <p class="lede">${t("builder.lede")}</p>
    </div>

    <div class="builder-steps" id="builder-steps">
      ${BUILDER_STEPS.map((s) => `<button class="builder-step ${s.id === builderStep ? "active" : ""}" data-step="${s.id}">${t(s.labelKey)}</button>`).join("")}
    </div>

    ${builderPreviewHTML()}

    <div class="builder-library-col">
      ${builderStep === "review" ? `
        <div class="section-title">${ICONS.sparkle}<span>${t("builder.reviewTitle")}</span></div>
        ${renderReviewStep()}
      ` : `
        <div class="tap-hint ${selectedAsset ? "tap-hint-active" : ""}">
          ${ICONS.hand}
          <span>${selectedAsset ? `${t("builder.readyToPlacePrefix")} <strong>${selectedAsset.label}</strong>` : t("builder.tapHint")}</span>
        </div>
        <div id="library-content">${renderLibraryForStep(builderStep)}</div>
        <div class="coming-soon-note" style="margin-top:var(--sp-4);">${ICONS.info}<span>${t("builder.dragTip")}</span></div>
      `}
    </div>
  `;

  bindBuilderEvents();
}

/* ---------------- Interaction ---------------- */
function selectLibraryItem(category, id) {
  if (builderSelection && builderSelection.category === category && builderSelection.id === id) {
    builderSelection = null; // tap again to deselect
  } else {
    builderSelection = { category, id };
  }
  renderMarchBuilder();
}

function placeIntoSlot(targetId, category, id) {
  const slotEl = document.querySelector(`[data-target="${targetId}"]`);
  if (!slotEl || slotEl.dataset.category !== category) return; // category mismatch — ignore
  setSlotValue(targetId, id);
  builderSelection = null;
  renderMarchBuilder();
}

function handleSlotTap(targetId, category) {
  if (builderSelection && builderSelection.category === category) {
    placeIntoSlot(targetId, category, builderSelection.id);
  } else if (getSlotValue(targetId)) {
    setSlotValue(targetId, null);
    renderMarchBuilder();
  }
}

function bindBuilderEvents() {
  document.getElementById("builder-steps").addEventListener("click", (e) => {
    const btn = e.target.closest(".builder-step");
    if (!btn) return;
    builderStep = btn.dataset.step;
    builderSelection = null;
    renderMarchBuilder();
  });

  const exportImageBtn = document.getElementById("export-image-btn");
  if (exportImageBtn) exportImageBtn.addEventListener("click", exportShareImage);

  const troopBar = document.getElementById("troop-filter-bar");
  if (troopBar) {
    troopBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-chip");
      if (!btn) return;
      builderTroopFilter = btn.dataset.troop;
      renderMarchBuilder();
    });
  }

  // Library items: tap to select, drag to place (desktop)
  document.querySelectorAll(".library-item").forEach((el) => {
    el.addEventListener("click", () => selectLibraryItem(el.dataset.category, el.dataset.id));
    el.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", JSON.stringify({ category: el.dataset.category, id: el.dataset.id }));
      e.dataTransfer.effectAllowed = "copy";
    });
  });

  // Slots: tap to place/remove, accept drops
  document.querySelectorAll(".b-slot").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest(".b-slot-remove")) {
        setSlotValue(el.dataset.target, null);
        renderMarchBuilder();
        return;
      }
      handleSlotTap(el.dataset.target, el.dataset.category);
    });
    el.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    });
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      let payload;
      try {
        payload = JSON.parse(e.dataTransfer.getData("text/plain"));
      } catch (err) {
        return;
      }
      if (payload && payload.category === el.dataset.category) {
        placeIntoSlot(el.dataset.target, payload.category, payload.id);
      }
    });
  });
}
