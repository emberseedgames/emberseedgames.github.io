// Emberseed 홈페이지 — 값은 이 둘뿐.
// 알림 신청 = 구글 폼(또는 Tally) 주소. 비어 있으면 메일 신청으로 넘어간다.
const NOTIFY_FORM_URL = "";
const CONTACT_MAIL = "emberseedgames@gmail.com";

// ── 언어 ── 한국어 = HTML 본문이 정본 · 영어·일본어 = assets/i18n.js 사전
const LANGS = ["ko", "en", "ja"];
const KO = {};            // 처음 읽을 때 HTML 의 한국어를 담아 둔다(되돌릴 때)
const KO_ATTR = {};
const KO_JS = {
  "js.mail.subject": "STALVERON 소식 알림 신청",
  "js.mail.body": "이 메일 주소로 STALVERON 소식을 받겠습니다.",
  "js.fallback.p": "메일 한 통이면 됩니다. 제목은 비워 두셔도 좋습니다.",
  "js.fallback.btn": "메일로 알림 신청",
  "js.iframe.title": "소식 알림 신청"
};

function t(lang, key) {
  const d = (lang !== "ko" && typeof I18N !== "undefined") ? I18N[lang] : null;
  if (d && d[key] != null) return d[key];
  return KO_JS[key] != null ? KO_JS[key] : KO[key];
}

function pickLang() {
  const saved = localStorage.getItem("lang");
  if (LANGS.includes(saved)) return saved;
  const nav = (navigator.language || "ko").toLowerCase();
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("ja")) return "ja";
  return "ko";
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  const d = (lang !== "ko" && typeof I18N !== "undefined") ? (I18N[lang] || {}) : null;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (!(k in KO)) KO[k] = el.innerHTML;
    el.innerHTML = (d && d[k] != null) ? d[k] : KO[k];
  });
  document.querySelectorAll("[data-i18n-content]").forEach(el => {
    const k = el.dataset.i18nContent;
    if (!(k in KO_ATTR)) KO_ATTR[k] = el.getAttribute("content");
    el.setAttribute("content", (d && d[k] != null) ? d[k] : KO_ATTR[k]);
  });
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  renderNotify(lang);
}

// 알림 신청 버튼 · 연락 페이지 폼 자리
function renderNotify(lang) {
  const mailHref = `mailto:${CONTACT_MAIL}?subject=${encodeURIComponent(t(lang, "js.mail.subject"))}&body=${encodeURIComponent(t(lang, "js.mail.body"))}`;
  document.querySelectorAll("[data-notify]").forEach(a => {
    a.href = NOTIFY_FORM_URL || mailHref;
    if (NOTIFY_FORM_URL) { a.target = "_blank"; a.rel = "noopener"; }
  });
  const frame = document.querySelector("[data-notify-frame]");
  if (!frame) return;
  if (NOTIFY_FORM_URL) {
    if (frame.querySelector("iframe")) return;
    const f = document.createElement("iframe");
    f.src = NOTIFY_FORM_URL; f.width = "100%"; f.height = "720"; f.style.border = "0";
    f.loading = "lazy"; f.title = t(lang, "js.iframe.title");
    frame.replaceChildren(f);
  } else {
    frame.innerHTML = `<p>${t(lang, "js.fallback.p")}</p>
      <a class="btn primary" href="${mailHref}">${t(lang, "js.fallback.btn")}</a>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 언어 전환기(상단 바)
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  applyLang(pickLang());
  // 모바일 메뉴
  const tg = document.querySelector(".nav-toggle"), nav = document.querySelector(".nav");
  if (tg && nav) tg.addEventListener("click", () => nav.classList.toggle("open"));
  // 현재 페이지 표시
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => { if (a.getAttribute("href") === here) a.classList.add("on"); });
});
