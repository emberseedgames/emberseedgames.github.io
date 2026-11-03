// Emberseed 홈페이지 — 값은 이 둘뿐.
// 알림 신청 = 구글 폼(또는 Tally) 주소. 비어 있으면 메일 신청으로 넘어간다.
const NOTIFY_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe7UnNbZ5QRmK0uPzXMnOzrLCTUzjWWzqUn-99-iiA6WzBlzA/viewform";
const CONTACT_MAIL = "emberseedgames@gmail.com";

// ── 언어 ── 한국어 = HTML 본문이 정본 · 영어·일본어 = assets/i18n.js 사전
const LANGS = ["ko", "en", "ja", "zh"];
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
  if (nav.startsWith("zh")) return "zh";
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
  document.querySelectorAll(".lang-menu button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  const cur = document.querySelector(".lang-cur-label"), pick = document.querySelector(`.lang-menu button[data-lang="${lang}"]`);
  if (cur && pick) cur.textContent = pick.textContent;
  renderNotify(lang);
}

// 알림 신청 버튼 · 연락 페이지 폼 자리
function renderNotify(lang) {
  const mailHref = `mailto:${CONTACT_MAIL}?subject=${encodeURIComponent(t(lang, "js.mail.subject"))}&body=${encodeURIComponent(t(lang, "js.mail.body"))}`;
  // 폼 주소가 있으면 버튼은 연락 페이지의 폼 자리로(사이트 안) · 없으면 메일 신청
  document.querySelectorAll("[data-notify]").forEach(a => {
    if (!NOTIFY_FORM_URL) a.href = mailHref;
  });
  const frame = document.querySelector("[data-notify-frame]");
  if (!frame) return;
  if (NOTIFY_FORM_URL) {
    if (frame.querySelector("iframe")) return;
    const f = document.createElement("iframe");
    f.src = NOTIFY_FORM_URL + "?embedded=true"; f.width = "100%"; f.height = "1500"; f.style.border = "0";
    f.loading = "lazy"; f.title = t(lang, "js.iframe.title"); f.setAttribute("scrolling", "no");
    frame.replaceChildren(f);
  } else {
    frame.innerHTML = `<p>${t(lang, "js.fallback.p")}</p>
      <a class="btn primary" href="${mailHref}">${t(lang, "js.fallback.btn")}</a>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 언어 전환기(상단 바 드롭다운)
  const lang = document.querySelector(".lang"), langBtn = document.querySelector(".lang-cur");
  const closeLang = () => { if (lang) { lang.classList.remove("open"); langBtn.setAttribute("aria-expanded", "false"); } };
  if (lang && langBtn) {
    langBtn.addEventListener("click", e => { e.stopPropagation(); const o = lang.classList.toggle("open"); langBtn.setAttribute("aria-expanded", String(o)); });
    document.addEventListener("click", closeLang);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeLang(); });
  }
  document.querySelectorAll(".lang-menu button").forEach(b => b.addEventListener("click", () => { applyLang(b.dataset.lang); closeLang(); }));
  applyLang(pickLang());
  // ☰ 서랍 메뉴
  const mb = document.querySelector(".menu-btn"), drawer = document.querySelector(".drawer");
  const isOpen = () => document.body.classList.contains("drawer-open");
  const setDrawer = o => { document.body.classList.toggle("drawer-open", o); if (mb) mb.setAttribute("aria-expanded", String(o)); if (drawer) drawer.setAttribute("aria-hidden", String(!o)); };
  // 서랍을 열면 이력에 한 단을 넣는다 → 폰 뒤로가기가 페이지 대신 서랍을 닫는다
  const openDrawer = () => { if (isOpen()) return; setDrawer(true); try { history.pushState({ drawer: 1 }, ""); } catch (_) {} };
  const closeDrawer = () => { if (!isOpen()) return; if (history.state && history.state.drawer) history.back(); else setDrawer(false); };
  window.addEventListener("popstate", () => { if (isOpen()) setDrawer(false); });
  if (mb) mb.addEventListener("click", () => isOpen() ? closeDrawer() : openDrawer());
  document.querySelectorAll(".drawer-close, .drawer-dim").forEach(el => el.addEventListener("click", closeDrawer));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
  document.querySelectorAll(".drawer-nav .group-head").forEach(h => h.addEventListener("click", () => {
    const g = h.parentElement, o = g.classList.toggle("open"); h.setAttribute("aria-expanded", String(o));
  }));
  // 읽기 진행바(스핀오프 읽기 페이지)
  const bar = document.querySelector(".progress span");
  if (bar) { const upd = () => { const h = document.documentElement; const d = h.scrollHeight - h.clientHeight; bar.style.width = (d > 0 ? Math.min(100, h.scrollTop / d * 100) : 0) + "%"; }; document.addEventListener("scroll", upd, { passive: true }); upd(); }
  // 현재 페이지 표시
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".drawer-nav a").forEach(a => { if (a.getAttribute("href") === here) a.classList.add("on"); });
});
