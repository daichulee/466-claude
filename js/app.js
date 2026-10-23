/* ============================================================
   V466 RUNESTONE — APP SHELL & ROUTER
   Hash-based router. No build step, no framework.
   ============================================================ */

window.__lang = localStorage.getItem("v466_lang") || "en";
let activeFilter = "all";

const root = document.getElementById("app");

/* ---------------- SHELL ---------------- */
function renderShell() {
  root.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <button class="sidebar-close-btn" id="sidebar-close-btn" aria-label="Close menu">${ICONS.close}</button>
        <a class="brand" href="#/home">
          <svg class="brand-mark" viewBox="18 8 64 84" fill="none">
            <g stroke="#e8c77e" stroke-width="7" stroke-linecap="round">
              <path d="M50,15 L50,85"/>
              <path d="M50,50 L25,15"/>
              <path d="M50,50 L75,15"/>
            </g>
          </svg>
          <div class="brand-text">
            <div class="brand-title">Runestone</div>
            <div class="brand-kingdom">V466 · KINGDOM #466</div>
          </div>
        </a>

        <nav class="nav-group" id="nav-group"></nav>

        <div class="sidebar-footer">
          <a class="social-card" href="#" onclick="return false;">
            <span class="social-icon">${ICONS.discord}</span>
            <span class="social-text">
              <div class="t1" data-i18n="sidebar.community">${t("sidebar.community")}</div>
              <div class="t2" data-i18n="sidebar.communitySub">${t("sidebar.communitySub")}</div>
            </span>
          </a>
          <div class="tribe-status-card">
            <div class="eyebrow" data-i18n="tribe.title">${t("tribe.title")}</div>
            <div class="tribe-status-row">
              <span class="label"><span class="status-dot"></span><span data-i18n="tribe.activity">${t("tribe.activity")}</span></span>
              <span class="value">${TRIBE_STATUS.activity}</span>
            </div>
            <div class="tribe-status-row">
              <span class="label" data-i18n="tribe.kingdom">${t("tribe.kingdom")}</span>
              <span class="value">${TRIBE_STATUS.kingdom}</span>
            </div>
            <div class="tribe-status-row">
              <span class="label" data-i18n="tribe.power">${t("tribe.power")}</span>
              <span class="value">${TRIBE_STATUS.power}</span>
            </div>
          </div>
        </div>
      </aside>

      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <div class="main-col">
        <header class="topbar">
          <button class="hamburger-btn" id="hamburger-btn" aria-label="Open menu">${ICONS.menu}</button>
          <label class="global-search">
            ${ICONS.search}
            <input id="global-search-input" type="text" data-i18n-ph="search.placeholder" placeholder="${t("search.placeholder")}" autocomplete="off" />
            <span class="search-kbd">/</span>
          </label>
          <div class="topbar-spacer"></div>
          <div class="lang-select" id="lang-select">
            <button class="lang-pill" id="lang-pill-btn">
              <span id="lang-pill-label">${LANGUAGES.find(l => l.code === window.__lang).label}</span>
              ${ICONS.chevronDown}
            </button>
            <div class="lang-menu" id="lang-menu"></div>
          </div>
        </header>
        <main id="view" class="view"></main>
      </div>
    </div>
  `;

  renderNav();
  renderLangMenu();
  bindShellEvents();
}

function renderNav() {
  const nav = document.getElementById("nav-group");
  const route = currentRoute();
  const homeActive = route.name === "home";
  const marchesActive = route.name === "marches" || route.name === "march-detail";
  const builderActive = route.name === "march-builder";
  const referenceActive = route.name === "field-reference";

  let html = `
    <a class="nav-item ${homeActive ? "active" : ""}" href="#/home">
      <span class="nav-icon">${ICONS.home}</span>
      <span data-i18n="nav.home">${t("nav.home")}</span>
    </a>
  `;

  // The public site has no debuff content at all — Home is the only page.
  html += `
    <a class="nav-item ${marchesActive ? "active" : ""}" href="#/marches">
      <span class="nav-icon">${ICONS.marches}</span>
      <span data-i18n="nav.marches">${t("nav.marches")}</span>
    </a>
    <a class="nav-item ${referenceActive ? "active" : ""}" href="#/reference">
      <span class="nav-icon">${ICONS.book}</span>
      <span data-i18n="nav.fieldReference">${t("nav.fieldReference")}</span>
    </a>
    <a class="nav-item ${builderActive ? "active" : ""}" href="#/marches/create">
      <span class="nav-icon">${ICONS.plus}</span>
      <span data-i18n="nav.createMarch">${t("nav.createMarch")}</span>
    </a>
  `;

  LOCKED_MODULES.forEach((m) => {
    html += `
      <div class="nav-item locked" tabindex="0" aria-label="${t(m.titleKey)} — ${t("tooltip.sealed")}">
        <span class="nav-icon">${ICONS[m.icon]}</span>
        <span data-i18n="${m.titleKey}">${t(m.titleKey)}</span>
        <span class="lock-glyph">${ICONS.lock}</span>
      </div>
    `;
  });

  nav.innerHTML = html;
}

function renderLangMenu() {
  const menu = document.getElementById("lang-menu");
  menu.innerHTML = LANGUAGES.map(
    (l) => `<button class="lang-option ${l.code === window.__lang ? "active" : ""}" data-lang="${l.code}">${l.label}</button>`
  ).join("");
}

function bindShellEvents() {
  const sidebarEl = document.querySelector(".sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

  const closeMobileSidebar = () => {
    sidebarEl.classList.remove("mobile-open");
    backdrop.classList.remove("visible");
  };
  const openMobileSidebar = () => {
    sidebarEl.classList.add("mobile-open");
    backdrop.classList.add("visible");
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMobileSidebar);
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener("click", closeMobileSidebar);
  if (backdrop) backdrop.addEventListener("click", closeMobileSidebar);
  // Closing on nav click means the drawer doesn't linger open after the
  // person picks where they're going — same pattern as most mobile menus.
  if (sidebarEl) {
    sidebarEl.addEventListener("click", (e) => {
      if (e.target.closest("a.nav-item, a.brand")) closeMobileSidebar();
    });
  }

  const langSelect = document.getElementById("lang-select");
  const langBtn = document.getElementById("lang-pill-btn");
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langSelect.classList.toggle("open");
  });
  document.addEventListener("click", () => langSelect.classList.remove("open"));

  document.getElementById("lang-menu").addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-option");
    if (!btn) return;
    window.__lang = btn.dataset.lang;
    localStorage.setItem("v466_lang", window.__lang);
    renderShell();
    renderCurrentView();
  });

  const searchInput = document.getElementById("global-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
    searchInput.addEventListener("blur", () => setTimeout(() => renderSearchResults(""), 150));
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }
}

/* ---------------- SEARCH ---------------- */
function renderSearchResults(query) {
  let dropdown = document.getElementById("search-dropdown");
  if (dropdown) dropdown.remove();
  const q = query.trim().toLowerCase();
  if (!q) return;

  const marchResults = MARCHES.filter((m) => {
    const haystack = [tv(m.title), m.category, ...m.recommendedHeroes].join(" ").toLowerCase();
    return haystack.includes(q);
  });
  const lockedResults = LOCKED_MODULES.filter((m) => t(m.titleKey).toLowerCase().includes(q));

  if (!marchResults.length && !lockedResults.length) return;

  dropdown = document.createElement("div");
  dropdown.id = "search-dropdown";
  dropdown.style.cssText = `
    position:absolute; top:calc(100% + 8px); left:0; width:100%;
    background:var(--panel-2); border:1px solid var(--border); border-radius:var(--r-md);
    box-shadow:0 12px 32px rgba(0,0,0,0.45); padding:6px; z-index:30; max-height:340px; overflow-y:auto;
  `;

  let html = "";
  marchResults.forEach((m) => {
    html += `<a href="#/marches/${m.id}" class="search-result-item" style="display:flex;justify-content:space-between;align-items:center;padding:9px 10px;border-radius:6px;font-size:13px;color:var(--text-primary);">
      <span>${tv(m.title)}</span><span class="tag-pill tag-${m.category}">${m.category}</span>
    </a>`;
  });
  lockedResults.forEach((m) => {
    html += `<div class="search-result-item" style="display:flex;justify-content:space-between;align-items:center;padding:9px 10px;border-radius:6px;font-size:13px;color:var(--text-faint);cursor:default;">
      <span>${t(m.titleKey)}</span><span class="lock-badge" style="width:20px;height:20px;">${ICONS.lock}</span>
    </div>`;
  });
  dropdown.innerHTML = html;
  document.querySelector(".global-search").appendChild(dropdown);

  dropdown.querySelectorAll("a.search-result-item").forEach((el) => {
    el.addEventListener("mouseenter", () => (el.style.background = "var(--panel-3)"));
    el.addEventListener("mouseleave", () => (el.style.background = "transparent"));
  });
}

/* ---------------- ROUTER ---------------- */
function currentRoute() {
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  if (!parts.length || parts[0] === "home") return { name: "home" };
  if (parts[0] === "marches" && parts[1] === "create") return { name: "march-builder" };
  if (parts[0] === "marches" && parts[1]) return { name: "march-detail", id: parts[1] };
  if (parts[0] === "marches") return { name: "marches" };
  if (parts[0] === "reference") return { name: "field-reference" };
  if (parts[0] === "strategies" && parts[1]) return { name: "strategy-detail", id: parts[1] };
  return { name: "home" };
}

function renderCurrentView() {
  const route = currentRoute();
  renderNav();
  if (route.name === "home") renderHome();
  else if (route.name === "marches") renderMarchList();
  else if (route.name === "march-detail") renderMarchDetail(route.id);
  else if (route.name === "march-builder") renderMarchBuilder();
  else if (route.name === "field-reference") renderFieldReference();
  else if (route.name === "strategy-detail") renderStrategyDetail(route.id);
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", renderCurrentView);
window.addEventListener("DOMContentLoaded", () => {
  renderShell();
  renderCurrentView();
});
