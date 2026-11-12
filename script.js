const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");
const copyStatus = document.querySelector("[data-copy-status]");

const safeStorage = {
  get(key) {
    try {
      return window.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage?.setItem(key, value);
    } catch {
      // Selection still applies for this page view.
    }
  },
};

// ---------- Language toggle (zh-Hant / en) ----------
// Every translatable element carries its English copy in data-en; the
// original Chinese markup is cached in data-zh on first switch.
const LANG_KEY = "site-lang";
const strings = {
  zh: { copied: "已複製", toggle: "EN", toggleLabel: "Switch to English", menuOpen: "開啟導覽", menuClose: "關閉導覽" },
  en: { copied: "Copied", toggle: "中文", toggleLabel: "切換為中文", menuOpen: "Open menu", menuClose: "Close menu" },
};

let currentLang = safeStorage.get(LANG_KEY) === "en" ? "en" : "zh";

const applyLang = (lang) => {
  currentLang = lang;
  document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll("[data-en]").forEach((el) => {
    if (!("zh" in el.dataset)) el.dataset.zh = el.innerHTML;
    el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.zh;
  });

  if (langToggle) {
    langToggle.textContent = strings[lang].toggle;
    langToggle.setAttribute("aria-label", strings[lang].toggleLabel);
  }
  if (menuToggle) {
    const isOpen = header?.classList.contains("is-open") ?? false;
    menuToggle.setAttribute("aria-label", isOpen ? strings[lang].menuClose : strings[lang].menuOpen);
  }
};

applyLang(currentLang);

langToggle?.addEventListener("click", () => {
  const next = currentLang === "en" ? "zh" : "en";
  safeStorage.set(LANG_KEY, next);
  applyLang(next);
});

// ---------- Header ----------
const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// ---------- Mobile menu ----------
const setMenuOpen = (isOpen, moveFocus = false) => {
  header?.classList.toggle("is-open", isOpen);
  menuToggle?.setAttribute("aria-label", isOpen ? strings[currentLang].menuClose : strings[currentLang].menuOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  if (isOpen && moveFocus) {
    nav?.querySelector("a")?.focus();
  }
};

menuToggle?.addEventListener("click", () => {
  const isOpen = !(header?.classList.contains("is-open") ?? false);
  setMenuOpen(isOpen, isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header?.classList.contains("is-open")) {
    setMenuOpen(false);
    menuToggle?.focus();
  }
});

// ---------- Copy to clipboard ----------
document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(value);
      if (copyStatus) copyStatus.textContent = strings[currentLang].copied;
    } catch {
      if (copyStatus) copyStatus.textContent = value;
    }
    window.setTimeout(() => {
      if (copyStatus) copyStatus.textContent = "";
    }, 2200);
  });
});

// ---------- Scroll reveal ----------
const revealTargets = [...document.querySelectorAll(".reveal")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
}
