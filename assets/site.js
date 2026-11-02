// Emberseed 홈페이지 — 한 곳에서만 바꾸는 값
// 알림 신청 폼(구글 폼 / Tally) 주소. 비어 있으면 메일 신청으로 떨어진다.
const NOTIFY_FORM_URL = "";
const CONTACT_MAIL = "emberseedgames@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  // 알림 신청 버튼 · 폼 자리
  const mailHref = `mailto:${CONTACT_MAIL}?subject=${encodeURIComponent("STALVERON 소식 알림 신청")}&body=${encodeURIComponent("이 메일 주소로 STALVERON 소식을 받겠습니다.")}`;
  document.querySelectorAll("[data-notify]").forEach(a => {
    a.href = NOTIFY_FORM_URL || mailHref;
    if (NOTIFY_FORM_URL) { a.target = "_blank"; a.rel = "noopener"; }
  });
  const frame = document.querySelector("[data-notify-frame]");
  if (frame) {
    if (NOTIFY_FORM_URL) {
      const f = document.createElement("iframe");
      f.src = NOTIFY_FORM_URL; f.width = "100%"; f.height = "720"; f.style.border = "0";
      f.loading = "lazy"; f.title = "소식 알림 신청";
      frame.replaceWith(f);
    } else {
      frame.innerHTML = `<p>메일 한 통이면 됩니다. 제목은 비워 두셔도 좋습니다.</p>
        <a class="btn primary" href="${mailHref}">메일로 알림 신청</a>`;
    }
  }
  // 모바일 메뉴
  const t = document.querySelector(".nav-toggle"), nav = document.querySelector(".nav");
  if (t && nav) t.addEventListener("click", () => nav.classList.toggle("open"));
  // 현재 페이지 표시
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => { if (a.getAttribute("href") === here) a.classList.add("on"); });
});
