// SYSTEM: REBOOT 웹사이트 설정
// 새 버전을 올리면 아래 VERSION · DATE · SIZE만 바꾸면 됩니다.
const SITE = {
  VERSION: "0.7.9",
  DATE: "2026.11.02",
  SIZE: "약 370MB",
  // GitHub Releases에 올리는 zip 파일 이름. 버전이 바뀌어도 이 이름 그대로 올리면 링크를 고칠 필요가 없습니다.
  ZIP_NAME: "SYSTEM_REBOOT.zip",
  // 비워 두면 사이트 주소(아이디.github.io/저장소)에서 저절로 알아냅니다. 예: "아이디/저장소"
  REPO: "",
};

(function () {
  let repo = SITE.REPO;
  if (!repo && location.hostname.endsWith(".github.io")) {
    const user = location.hostname.split(".")[0];
    const name = location.pathname.split("/").filter(Boolean)[0] || location.hostname;
    repo = user + "/" + name;
  }
  const base = repo ? "https://github.com/" + repo : "";
  const links = {
    zip: base ? base + "/releases/latest/download/" + SITE.ZIP_NAME : "#",
    releases: base ? base + "/releases" : "#",
  };

  document.querySelectorAll("[data-link]").forEach((a) => {
    a.href = links[a.dataset.link] || "#";
  });
  document.querySelectorAll("[data-site]").forEach((el) => {
    el.textContent = SITE[el.dataset.site] ?? "";
  });

  // 지금 보고 있는 메뉴 표시
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav li a").forEach((a) => {
    if (a.getAttribute("href") === page) a.classList.add("on");
  });
})();
