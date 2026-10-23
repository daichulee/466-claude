/* ============================================================
   V466 RUNESTONE — PASSWORD GATE (Stage 6)

   Gates access to Debuff march detail pages behind a shared
   tribe passphrase. Unlocking persists for the current browser
   session (sessionStorage) — closing the tab/browser resets it.

   ⚠️ IMPORTANT — THIS IS NOT REAL SECURITY.
   The password lives in plain text in this client-side file,
   visible to anyone who opens dev tools or views the page
   source. It's a soft "ask nicely" gate for a prototype/demo,
   good enough to keep the content off search engines and casual
   browsing, but NOT good enough to protect anything sensitive.

   For a real deployment, replace this with actual server-side
   auth: a backend check, Vercel/Netlify Edge Middleware, or a
   proper login system — none of which can live in a static
   client-only file like this one.
   ============================================================ */

const DEBUFF_PASSPHRASE = "GolashasFeet_466";
const DEBUFF_UNLOCK_KEY = "v466_debuff_unlocked";

function isDebuffUnlocked() {
  return sessionStorage.getItem(DEBUFF_UNLOCK_KEY) === "1";
}

function tryUnlockDebuff(passphrase) {
  if (passphrase === DEBUFF_PASSPHRASE) {
    sessionStorage.setItem(DEBUFF_UNLOCK_KEY, "1");
    return true;
  }
  return false;
}

function passwordGateOverlayHTML() {
  return `
    <div class="gate-overlay" id="gate-overlay">
      <div class="gate-modal">
        <div class="gate-modal-icon">${ICONS.lock}</div>
        <h3 class="gate-modal-title">${t("gate.title")}</h3>
        <p class="gate-modal-body">${t("gate.body")}</p>
        <div class="gate-input-row">
          <input type="password" class="gate-modal-input" id="gate-password-input" placeholder="${t("gate.placeholder")}" autocomplete="off" />
          <button type="button" class="gate-input-toggle" id="gate-toggle-visibility" aria-label="${t("gate.showPassword")}">${ICONS.eye}</button>
        </div>
        <div class="gate-modal-error" id="gate-modal-error" style="display:none;">${t("gate.error")}</div>
        <button class="gate-modal-button" id="gate-unlock-btn">${t("gate.button")}</button>
      </div>
    </div>
  `;
}

function bindPasswordGate(onUnlock) {
  const input = document.getElementById("gate-password-input");
  const btn = document.getElementById("gate-unlock-btn");
  const errorEl = document.getElementById("gate-modal-error");
  const toggleBtn = document.getElementById("gate-toggle-visibility");
  if (!input || !btn) return;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      toggleBtn.innerHTML = showing ? ICONS.eye : ICONS.eyeOff;
      toggleBtn.setAttribute("aria-label", showing ? t("gate.showPassword") : t("gate.hidePassword"));
      input.focus();
    });
  }

  const attempt = () => {
    if (tryUnlockDebuff(input.value)) {
      onUnlock();
    } else {
      errorEl.style.display = "block";
      input.classList.add("gate-input-error");
      input.value = "";
      input.focus();
    }
  };

  btn.addEventListener("click", attempt);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") attempt();
    errorEl.style.display = "none";
    input.classList.remove("gate-input-error");
  });
  input.focus();
}
