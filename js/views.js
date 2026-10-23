/* ============================================================
   V466 RUNESTONE — VIEWS
   ============================================================ */

function difficultyDots(level) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= level ? "filled" : ""}"></span>`;
  }
  return `<div class="difficulty-dots">${html}</div>`;
}

function statusMeta(status) {
  return status === "proven"
    ? { cls: "status-proven", label: t("status.proven") }
    : { cls: "status-testing", label: t("status.testing") };
}

function strategyTagHTML(strategy) {
  if (!strategy) return "";
  return `<span class="strategy-tag strategy-tag-${strategy}">${t("strategy." + strategy)}</span>`;
}

function marchCardHTML(m) {
  const s = statusMeta(m.status);
  return `
    <a class="march-card" href="#/marches/${m.id}">
      <div class="march-card-top">
        <div style="display:flex; gap:6px; align-items:center;">
          ${strategyTagHTML(m.strategy)}
          <span class="tag-pill tag-${m.category}">${t("filter." + m.category)}</span>
        </div>
        <span class="status-pill ${s.cls}">${s.label}</span>
      </div>
      <h3>${tv(m.title)}</h3>
      <p class="summary">${tv(m.summary)}</p>
      <div class="hero-chip-row">
        ${m.recommendedHeroes.map((h) => `<span class="hero-chip">${h}</span>`).join("")}
      </div>
      <div class="march-meta-row">
        <div class="march-meta">
          <span class="k">${t("meta.tier")}</span>
          <span class="v">${m.recommendedTier}</span>
        </div>
        <div class="march-meta">
          <span class="k">${t("meta.difficulty")}</span>
          ${difficultyDots(m.difficulty)}
        </div>
      </div>
      <div class="card-cta">${t("card.viewDetail")} ${ICONS.arrowRight}</div>
    </a>
  `;
}

function lockedCardHTML(mod) {
  return `
    <div class="locked-card">
      <div class="locked-card-preview ${mod.seal}"></div>
      <div class="locked-card-body">
        <div>
          <h4>${t(mod.titleKey)}</h4>
          <div class="locked-note">${t("locked.note")}</div>
        </div>
        <div class="lock-badge">
          ${ICONS.lock}
          <div class="lock-tooltip">${t("tooltip.sealed")}</div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------- HOME ---------------- */
function renderHome() {
  const view = document.getElementById("view");
  const debuffMarches = MARCHES.filter((m) => m.category === "debuff");
  const homeMarches = debuffMarches.slice(0, 3);

  view.innerHTML = `
    <div class="home-hero">
      <div class="home-hero-glow"></div>
      <div class="home-hero-content">
        <div class="eyebrow">${t("home.eyebrow")}</div>
        <h1>${t("home.title")}</h1>
        <p class="lede">${t("home.lede")}</p>
      </div>
      <div class="home-stat-row">
        <div class="home-stat-tile">
          ${ICONS.trophy}
          <div><div class="home-stat-value">5</div><div class="home-stat-label">${t("home.statKvkWon")}</div></div>
        </div>
        <div class="home-stat-tile">
          ${ICONS.swords}
          <div><div class="home-stat-value">Top 1</div><div class="home-stat-label">${t("home.statHatedKingdoms")}</div></div>
        </div>
        <div class="home-stat-tile">
          ${ICONS.gem}
          <div><div class="home-stat-value">500K</div><div class="home-stat-label">${t("home.statCrystalsStolen")}</div></div>
        </div>
        
        <a href="#/marches/create" class="home-stat-tile home-stat-cta">
          ${ICONS.plus}
          <div><div class="home-stat-value">${t("filter.createMarch")}</div><div class="home-stat-label">${t("home.ctaSubtitle")}</div></div>
        </a>
      </div>
    </div>

    
    <section>
      <div class="home-active-flag"><span class="dot"></span>${t("home.activeFlag")}</div>
      <div class="section-title">${ICONS.marches}<span>${t("home.marchesTitle")}</span></div>
      <p class="lede" style="margin-bottom:var(--sp-4);">${t("home.marchesLede")}</p>
      <div class="grid-cards">
        ${homeMarches.map(marchCardHTML).join("")}
      </div>
      <div style="margin-top:var(--sp-4);">
        <a href="#/marches" class="card-cta" style="font-size:12px;">${t("home.viewAll")} (${debuffMarches.length}) ${ICONS.arrowRight}</a>
      </div>
    </section>

    <div class="divider-rune"></div>

    <section>
      <a class="reference-preview-card" href="#/reference">
        <div class="reference-preview-icon">${ICONS.book}</div>
        <div class="reference-preview-body">
          <div class="section-title" style="margin-bottom:var(--sp-2);"><span>${t("reference.title")}</span></div>
          <p class="lede" style="margin-bottom:var(--sp-3);">${t("reference.lede")}</p>
          <div class="reference-preview-tags">
            <span class="tag-pill">${t("reference.strategyTitle")}</span>
            <span class="tag-pill">${t("reference.skillTierTitle")}</span>
            <span class="tag-pill">${t("reference.heroTierTitle")}</span>
          </div>
        </div>
        <div class="reference-preview-arrow">${ICONS.arrowRight}</div>
      </a>
    </section>

    <div class="divider-rune"></div>
    

    <section>
      <div class="section-title">${ICONS.swords}<span>${t("module.tribeStrategies")}</span></div>
      <p class="lede" style="margin-bottom:var(--sp-4);">${t("home.tribeStrategiesLede")}</p>
      <div class="grid-cards">
        ${TRIBE_STRATEGIES.map(strategyPreviewCardHTML).join("")}
      </div>
    </section>

    ${LOCKED_MODULES.length ? `
      <div class="divider-rune"></div>
      <section>
        <div class="section-title">${ICONS.lock}<span>${t("home.lockedTitle")}</span></div>
        <p class="lede" style="margin-bottom:var(--sp-4);">${t("home.lockedLede")}</p>
        ${LOCKED_MODULES.map((m) => `
          <div class="locked-module-group">
            <h3 class="locked-module-title">${ICONS[m.icon]}<span>${t(m.titleKey)}</span></h3>
            <div class="grid-locked">
              ${(m.previewTopics && m.previewTopics.length ? m.previewTopics : [m]).map(lockedCardHTML).join("")}
            </div>
          </div>
        `).join("")}
      </section>
    ` : ""}
  `;
}

function strategyPreviewCardHTML(s) {
  const ready = !!(s.steps || s.sections);
  return `
    <a class="march-card strategy-card" href="#/strategies/${s.id}">
      <div class="march-card-top">
        <span class="strategy-card-icon">${ICONS[s.icon]}</span>
        ${ready ? "" : `<span class="status-pill status-testing">${t("status.draft")}</span>`}
      </div>
      <h3>${tv(s.title)}</h3>
      <p class="summary">${tv(s.summary)}</p>
    </a>
  `;
}

/* ---------------- STRATEGY DETAIL ---------------- */
function renderStrategyDetail(id) {
  const view = document.getElementById("view");
  const s = TRIBE_STRATEGIES.find((x) => x.id === id);
  if (!s) {
    view.innerHTML = `<p class="empty-note">${t("strategy.notFound")}</p>`;
    return;
  }
  const list = (arr, tag) => `<${tag} class="${tag === "ol" ? "strategy-steps" : "strategy-keys"}">${arr.map((x) => `<li>${tv(x)}</li>`).join("")}</${tag}>`;

  view.innerHTML = `
    <div class="page-header">
      <div class="eyebrow"><a href="#/home" style="color:var(--text-muted);">${t("nav.home")}</a> / ${t("module.tribeStrategies")}</div>
      <h1>${tv(s.title)}</h1>
      <p class="lede">${tv(s.summary)}</p>
    </div>

    ${s.sections ? `
      ${s.sections.map((sec) => detailSection(tv(sec.title), ICONS.diamond, list(sec.items, "ul"))).join("")}
      ${s.related ? detailSection(t("strategy.related"), ICONS.arrowRight, `<div class="strategy-related">${s.related.map((rid) => { const r = TRIBE_STRATEGIES.find((x) => x.id === rid); return r ? `<a class="strategy-related-link" href="#/strategies/${r.id}">${tv(r.title)}</a>` : ""; }).join("")}</div>`) : ""}
    ` : s.steps ? `
      <div class="strategy-detail-top">
        <div>
          ${detailSection(t("strategy.howTo"), ICONS.footsteps, list(s.steps, "ol"))}
        </div>
        ${s.image ? `<figure class="strategy-figure">
          <img class="strategy-full-img" src="${s.image}" alt="${tv(s.title)}" />
          ${s.imageCaption ? `<figcaption>${tv(s.imageCaption)}</figcaption>` : ""}
        </figure>` : ""}
      </div>
      ${s.why ? detailSection(t("strategy.whyTitle"), ICONS.sparkle, `<p class="strategy-why">${tv(s.why)}</p>`) : ""}
      ${detailSection(t("strategy.keyPoints"), ICONS.target, list(s.keyPoints, "ul"))}
      ${s.mistakes ? detailSection(t("strategy.mistakesTitle"), ICONS.warning, list(s.mistakes, "ul")) : ""}
      ${s.related ? detailSection(t("strategy.related"), ICONS.arrowRight, `<div class="strategy-related">${s.related.map((rid) => { const r = TRIBE_STRATEGIES.find((x) => x.id === rid); return r ? `<a class="strategy-related-link" href="#/strategies/${r.id}">${tv(r.title)}</a>` : ""; }).join("")}</div>`) : ""}
    ` : `
      <div class="strategy-note-card strategy-note-warn">
        <div class="strategy-note-icon">${ICONS.info}</div>
        <div class="strategy-note-body">${t("strategy.draftNotice")}</div>
      </div>
    `}
  `;
}

/* ---------------- MARCH LIST ---------------- */
function renderMarchList() {
  const view = document.getElementById("view");

  view.innerHTML = `
    <div class="page-header">
      <div class="eyebrow">${t("marches.eyebrow")}</div>
      <h1>${t("marches.title")}</h1>
      <p class="lede">${t("marches.lede")}</p>
    </div>

    <div class="filter-bar" id="filter-bar">
      ${MARCH_CATEGORIES.map(
        (c) => `<button class="filter-chip ${c === activeFilter ? "active" : ""}" data-cat="${c}">${t("filter." + c)}</button>`
      ).join("")}
      <a href="#/marches/create" class="filter-chip filter-chip-create">${ICONS.plus}<span>${t("filter.createMarch")}</span></a>
    </div>

    ${CATEGORY_INTRO[activeFilter] ? `<div class="category-intro">${tv(CATEGORY_INTRO[activeFilter])}</div>` : ""}

    <div class="grid-cards" id="march-grid"></div>
  `;

  document.getElementById("filter-bar").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip:not(.filter-chip-create)");
    if (!btn) return;
    activeFilter = btn.dataset.cat;
    renderMarchList();
  });

  renderMarchGrid();
}

function renderMarchGrid() {
  const grid = document.getElementById("march-grid");
  const filtered = activeFilter === "all" ? MARCHES : MARCHES.filter((m) => m.category === activeFilter);

  if (!filtered.length) {
    grid.innerHTML = `<p class="empty-note">No compositions in this category yet.</p>`;
    return;
  }
  grid.innerHTML = filtered.map(marchCardHTML).join("");
}

function mediaGalleryHTML(media) {
  if (!media || media.length === 0) return "";
  const multi = media.length > 1;
  return `
    <div class="media-gallery">
      <div class="media-gallery-viewport">
        <div class="media-gallery-track">
          ${media.map((item) => `
            <div class="media-gallery-slide">
              ${item.type === "video"
                ? `<video src="${item.src}" controls playsinline muted></video>`
                : `<img src="${item.src}" alt="" loading="lazy" />`}
            </div>
          `).join("")}
        </div>
        ${multi ? `
          <button class="media-gallery-arrow media-gallery-prev" aria-label="Previous">${ICONS.arrowRight}</button>
          <button class="media-gallery-arrow media-gallery-next" aria-label="Next">${ICONS.arrowRight}</button>
        ` : ""}
      </div>
      ${multi ? `
        <div class="media-gallery-dots">
          ${media.map((_, i) => `<button class="media-gallery-dot ${i === 0 ? "active" : ""}" data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>`).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function bindMediaGallery() {
  const gallery = document.querySelector(".media-gallery");
  if (!gallery) return;
  const track = gallery.querySelector(".media-gallery-track");
  const dots = gallery.querySelectorAll(".media-gallery-dot");
  const slideCount = gallery.querySelectorAll(".media-gallery-slide").length;
  if (slideCount <= 1) return;

  let index = 0;
  const goTo = (i) => {
    index = (i + slideCount) % slideCount;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  };

  const prevBtn = gallery.querySelector(".media-gallery-prev");
  const nextBtn = gallery.querySelector(".media-gallery-next");
  if (prevBtn) prevBtn.addEventListener("click", () => goTo(index - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goTo(index + 1));
  dots.forEach((d) => d.addEventListener("click", () => goTo(Number(d.dataset.slide))));
}

/* ---------------- MARCH DETAIL ---------------- */
function detailSection(title, iconSvg, bodyHTML) {
  return `
    <section class="detail-section">
      <div class="section-title">${iconSvg}<span>${title}</span></div>
      ${bodyHTML}
    </section>
  `;
}

function heroAvatarHTML(name) {
  const asset = findAsset("heroes", name);
  return asset ? assetThumbHTML(asset, "asset-thumb-lg") : `<div class="hero-avatar">${name.charAt(0)}</div>`;
}

function skillThumbHTML(category, name) {
  const asset = findAsset(category, name);
  return asset ? assetThumbHTML(asset, "asset-thumb-md") : "";
}

function heroCardHTML(h) {
  const commanderLabel = h.commander === "main" ? t("hero.mainCommander") : t("hero.secondaryCommander");
  return `
    <div class="hero-card-v2">
      ${heroAvatarHTML(h.name)}
      <div class="hero-card-body">
        <div class="hero-tag-row">
          <span class="hero-tag hero-tag-rarity">${h.rarity}</span>
          <span class="hero-tag">${h.roleTag}</span>
        </div>
        <div class="hero-name">${h.name}</div>
        <div class="hero-commander-label">${commanderLabel}</div>
        <div class="hero-note">${tv(h.note)}</div>
        <div class="hero-skills">
          ${h.skills.map((sk) => sk ? `
            <div class="hero-skill-row">
              ${skillThumbHTML("heroSkills", sk.name)}
              <span class="hero-skill-name">${sk.name}</span>
              <span class="hero-skill-note">${sk.note}</span>
            </div>
          ` : `
            <div class="hero-skill-row hero-skill-flex">
              <span class="hero-skill-flex-mark">×</span>
              <span class="hero-skill-flex-label">${t("detail.flexSlot")}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderMarchDetail(id) {
  const view = document.getElementById("view");
  const realMarch = MARCHES.find((x) => x.id === id);

  if (!realMarch) {
    view.innerHTML = `<p class="empty-note">Composition not found.</p>`;
    return;
  }

  // While locked, every field used below comes from the decoy march
  // instead of the real one — nothing real reaches the page at all,
  // not even blurred behind the modal like before.
  const gated = realMarch.category === "debuff" && !isDebuffUnlocked();
  const m = gated ? DECOY_DEBUFF_MARCH : realMarch;
  const d = m.detail;
  const s = statusMeta(m.status);

  view.innerHTML = `
    <div class="${gated ? "gated-content" : ""}">
    <div class="page-header" style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:var(--sp-4);">
      <div>
        <div class="eyebrow"><a href="#/marches" style="color:var(--text-muted);">${t("marches.title")}</a> / ${t("filter." + m.category)}</div>
        <h1>${tv(m.title)}</h1>
        <p class="lede">${tv(m.summary)}</p>
      </div>
      <div style="display:flex; gap:8px; align-items:center; flex-shrink:0;">
        ${strategyTagHTML(m.strategy)}
        <span class="tag-pill tag-${m.category}">${t("filter." + m.category)}</span>
        <span class="status-pill ${s.cls}">${s.label}</span>
      </div>
    </div>

    <div class="detail-panel meta-strip">
      <div class="meta-strip-item">
        <span class="k">${t("meta.tier")}</span>
        <span class="v">${m.recommendedTier}</span>
      </div>
      <div class="meta-strip-divider"></div>
      <div class="meta-strip-item">
        <span class="k">${t("meta.difficulty")}</span>
        ${difficultyDots(m.difficulty)}
      </div>
      <div class="meta-strip-divider"></div>
      <div class="meta-strip-item">
        <span class="k">${t("meta.status")}</span>
        <span class="v">${s.label}</span>
      </div>
    </div>

    <div class="detail-grid-2 detail-grid-2-stretch">
      ${detailSection(t("detail.quickSteps"), ICONS.footsteps, `
        <div class="battle-steps-list">
          ${d.quickSteps.map((step, i) => `
            <div class="battle-step-row">
              <span class="battle-step-num">${i + 1}</span>
              <span>${tv(step)}</span>
            </div>
          `).join("")}
        </div>
      `)}
      ${detailSection(t("detail.intelSummary"), ICONS.info, `
        <div class="intel-list">
          <div class="intel-row">
            <span class="intel-label">${t("detail.useCase")}</span>
            <span class="intel-value">${tv(d.useCase)}</span>
          </div>
          <div class="intel-row">
            <span class="intel-label">${t("meta.tier")}</span>
            <span class="intel-value">${m.recommendedTier}</span>
          </div>
          <div class="intel-row">
            <span class="intel-label">${t("section.recommendedHeroes")}</span>
            <span class="intel-value">${d.heroes.map((h) => h.name).join(" + ")}</span>
          </div>
        </div>
      `)}
    </div>

    ${detailSection(t("section.tacticalObjective"), ICONS.sparkle, `
      <div class="detail-panel">
        <p class="detail-p" style="margin-bottom:var(--sp-4); max-width:none;">${tv(d.objective)}</p>
        <div class="tactical-subgrid">
          <div class="tactical-subcard">
            <div class="tactical-subcard-icon">${ICONS.diamond}</div>
            <div class="tactical-subcard-title">${t("section.whenToUse")}</div>
            <div class="tactical-subcard-text">${tv(d.whenToUse)}</div>
          </div>
          <div class="tactical-subcard">
            <div class="tactical-subcard-icon">${ICONS.diamond}</div>
            <div class="tactical-subcard-title">${t("section.counters")}</div>
            <div class="tactical-subcard-text">${tv(d.counters)}</div>
          </div>
          <div class="tactical-subcard">
            <div class="tactical-subcard-icon warn">${ICONS.warning}</div>
            <div class="tactical-subcard-title">${t("section.commonMistakes")}</div>
            <div class="tactical-subcard-text">
              <ul class="mistakes-list">${d.commonMistakes.map((x) => `<li>${tv(x)}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </div>
    `)}

    ${detailSection(t("section.recommendedHeroes"), ICONS.shield, `
      <div class="hero-card-grid">
        ${d.heroes.map(heroCardHTML).join("")}
      </div>
      ${m.category === "debuff" ? `
        <a href="#/reference" class="reference-link">${t("reference.linkText")} ${ICONS.arrowRight}</a>
      ` : ""}
    `)}

    ${detailSection(t("section.troopComposition"), ICONS.target, `
      <div class="detail-panel">
        <p class="detail-p" style="max-width:none; ${d.troopTierNote ? "margin-bottom:var(--sp-4);" : ""}">${tv(d.troopComposition)}</p>
        ${d.troopTierNote ? `
          <div class="tier-cost-grid">
            ${TROOP_TIER_COSTS.map((tc) => `
              <div class="tier-cost-card">
                <div class="tier-cost-badge">${tc.tier}</div>
                <div class="tier-cost-row"><span class="tier-cost-plus">+</span><span>${tv(tc.pros)}</span></div>
                <div class="tier-cost-row"><span class="tier-cost-minus">−</span><span>${tv(tc.cons)}</span></div>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </div>
    `)}

    <div class="divider-rune"></div>

    <div class="detail-grid-2">
      ${detailSection(t("section.pros"), ICONS.scaleBalance, `
        <ul class="pros-list">${d.pros.map((x) => `<li>+ ${tv(x)}</li>`).join("")}</ul>
      `)}
      ${detailSection(t("section.cons"), ICONS.scaleBalance, `
        <ul class="cons-list">${d.cons.map((x) => `<li>− ${tv(x)}</li>`).join("")}</ul>
      `)}
    </div>

    ${(() => {
      const mountCol = d.mount ? detailSection(t("section.mount"), ICONS.horse, `
        <div class="mount-container">
          <div class="mount-badge-row">
            ${(() => {
              const mAsset = findAsset("mounts", d.mount.name);
              return mAsset ? assetThumbHTML(mAsset, "asset-thumb-mount") : `<div class="mount-badge-icon">${ICONS.horse}</div>`;
            })()}
            <div class="mount-badge-info">
              <div class="mount-badge-name">${d.mount.name}</div>
              <div class="mount-badge-tags">
                <span class="mount-tag">Lv. ${d.mount.level}</span>
                <span class="mount-tag">${d.mount.type}</span>
                <span class="mount-tag mount-tag-gold">${d.mount.marker}</span>
              </div>
            </div>
          </div>
          <div class="mount-divider"></div>
          <div class="mount-skills-list">
            ${(d.mountSkills || []).map((sk) => sk ? `
              <div class="mount-skill-row">
                ${skillThumbHTML("mountSkills", sk.name)}
                <span class="hero-skill-name">${sk.name}</span>
                <span class="hero-skill-note">${sk.note}</span>
              </div>
            ` : `
              <div class="mount-skill-row hero-skill-flex">
                <span class="hero-skill-flex-mark">×</span>
                <span class="hero-skill-flex-label">${t("detail.flexSlot")}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `) : "";

      const equipCol = detailSection(t("section.equipment"), ICONS.gear, `
        <div class="equip-panel">
          <div class="equip-grid">
            ${d.equipment.map((e) => {
              if (!e) {
                return `<div class="equip-slot equip-slot-flex"><span class="hero-skill-flex-mark">×</span><div class="equip-slot-name">${t("detail.flexSlot")}</div></div>`;
              }
              const eAsset = findAsset("equipment", e);
              const thumb = eAsset ? assetThumbHTML(eAsset, "asset-thumb-equip") : `<div class="equip-slot-icon">${ICONS.shield}</div>`;
              return `
              <div class="equip-slot">
                ${thumb}
                <div class="equip-slot-name">${e}</div>
              </div>
            `;
            }).join("")}
          </div>
        </div>
      `);

      if (!mountCol) return `<div>${equipCol}</div>`;
      return `<div class="detail-grid-2 detail-grid-2-stretch">${mountCol}${equipCol}</div>`;
    })()}

    ${m.media && m.media.length ? `<div class="divider-rune"></div>${mediaGalleryHTML(m.media)}` : ""}

    <div class="divider-rune"></div>

    ${detailSection(t("section.otherCompositions"), ICONS.scroll, `
      <div class="grid-cards" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr));">
        ${MARCHES.filter((x) => x.id !== m.id && d.related.includes(x.id)).map(marchCardHTML).join("")}
      </div>
    `)}
    </div>
    ${gated ? passwordGateOverlayHTML() : ""}
  `;

  if (gated) {
    bindPasswordGate(() => renderMarchDetail(id));
  }
  bindMediaGallery();
}

/* ---------------- FIELD REFERENCE ---------------- */
function tierBadgeHTML(tier) {
  const cls = "tier-badge-" + tier.charAt(0).toLowerCase();
  return `<div class="tier-badge ${cls}">${tier}</div>`;
}

function tierRowHTML(tier, items, category, sizeClass) {
  return `
    <div class="tier-row">
      ${tierBadgeHTML(tier)}
      <div class="tier-row-items">
        ${items.map((name) => {
          const asset = findAsset(category, name);
          return `
            <div class="tier-item">
              ${asset ? assetThumbHTML(asset, sizeClass) : `<div class="asset-thumb ${sizeClass}"><div class="asset-fallback" style="display:flex;">${name.charAt(0)}</div></div>`}
              <span class="tier-item-name">${name}</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderFieldReference() {
  const view = document.getElementById("view");

  // Reachable directly via #/reference, bypassing any march detail
  // page — so it needs the exact same full-substitution gating:
  // while locked, every dataset used below is the decoy version,
  // and nothing real is present in the page at all.
  const gated = !isDebuffUnlocked();
  const strategyOverview = gated ? DECOY_STRATEGY_OVERVIEW : STRATEGY_OVERVIEW;
  const skillTierList = gated ? DECOY_SKILL_TIER_LIST : SKILL_TIER_LIST;
  const heroTierList = gated ? DECOY_HERO_TIER_LIST : HERO_TIER_LIST;

  view.innerHTML = `
    <div class="${gated ? "gated-content" : ""}">
    <div class="page-header">
      <div class="eyebrow">${t("reference.eyebrow")}</div>
      <h1>${t("reference.title")}</h1>
      <p class="lede">${t("reference.lede")}</p>
    </div>

    ${detailSection(t("reference.strategyTitle"), ICONS.sparkle, `
      <div class="strategy-note-grid">
        ${strategyOverview.map((block, i) => `
          <div class="strategy-note-card ${i === strategyOverview.length - 1 ? "strategy-note-warn" : ""}">
            <div class="strategy-note-icon">${i === strategyOverview.length - 1 ? ICONS.warning : ICONS.diamond}</div>
            <div class="strategy-note-title">${tv(block.title)}</div>
            <div class="strategy-note-body">${tv(block.body)}</div>
          </div>
        `).join("")}
      </div>
    `)}

    <div class="divider-rune"></div>

    ${detailSection(t("reference.skillTierTitle"), ICONS.swords, `
      <p class="detail-p" style="max-width:none; margin-bottom:var(--sp-4);">${t("reference.skillTierLede")}</p>
      <div class="tier-list">
        ${skillTierList.map((row) => tierRowHTML(row.tier, row.skills, "heroSkills", "asset-thumb-md")).join("")}
      </div>
    `)}

    <div class="divider-rune"></div>

    ${detailSection(t("reference.heroTierTitle"), ICONS.shield, `
      <p class="detail-p" style="max-width:none; margin-bottom:var(--sp-4);">${t("reference.heroTierLede")}</p>
      <div class="tier-list">
        ${heroTierList.map((row) => tierRowHTML(row.tier, row.heroes, "heroes", "asset-thumb-lg")).join("")}
      </div>
    `)}
    </div>
    ${gated ? passwordGateOverlayHTML() : ""}
  `;

  if (gated) {
    bindPasswordGate(() => renderFieldReference());
  }
}
