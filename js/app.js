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
        <a class="brand" href="#/home">
          <svg class="brand-mark" viewBox="0 0 40 40" fill="none">
            <path d="M20 3 6 10v10c0 10 6 15.5 14 17 8-1.5 14-7 14-17V10L20 3Z" fill="#141922" stroke="#c69a5c" stroke-width="1.2"/>
            <path d="M20 10v20M14 15l6-5 6 5M14 25l6 5 6-5" stroke="#4a9edb" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
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

      <div class="main-col">
        <header class="topbar">
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
  const marchesActive = route.name === "marches" || route.name === "march-detail" || route.name === "march-builder";

  let html = `
    <a class="nav-item ${homeActive ? "active" : ""}" href="#/home">
      <span class="nav-icon">${ICONS.home}</span>
      <span data-i18n="nav.home">${t("nav.home")}</span>
    </a>
    <a class="nav-item ${marchesActive ? "active" : ""}" href="#/marches">
      <span class="nav-icon">${ICONS.marches}</span>
      <span data-i18n="nav.marches">${t("nav.marches")}</span>
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
  searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
  searchInput.addEventListener("blur", () => setTimeout(() => renderSearchResults(""), 150));
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

/* ---------------- SEARCH ---------------- */
function renderSearchResults(query) {
  let dropdown = document.getElementById("search-dropdown");
  if (dropdown) dropdown.remove();
  const q = query.trim().toLowerCase();
  if (!q) return;

  const marchResults = MARCHES.filter((m) => {
    const haystack = [m.title, m.category, ...m.recommendedHeroes].join(" ").toLowerCase();
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
      <span>${m.title}</span><span class="tag-pill tag-${m.category}">${m.category}</span>
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
  return { name: "home" };
}

function renderCurrentView() {
  const route = currentRoute();
  renderNav();
  if (route.name === "home") renderHome();
  else if (route.name === "marches") renderMarchList();
  else if (route.name === "march-detail") renderMarchDetail(route.id);
  else if (route.name === "march-builder") renderMarchBuilder();
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", renderCurrentView);
window.addEventListener("DOMContentLoaded", () => {
  renderShell();
  renderCurrentView();
});
