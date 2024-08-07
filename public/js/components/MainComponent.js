const setDiaryLinkToToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}${month}${day}`;

  return `/diary/${formattedDate}`;
};

async function MainComponent(content) {
  const loadCSS = href => {
    // 모든 CSS 링크를 찾아 제거
    document.querySelectorAll("link[type='text/css']").forEach(link => link.remove());

    const link = document.createElement("link");
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };

  const currentPath = window.location.pathname;

  // 각 경로에 맞는 CSS 파일을 로드
  if (currentPath === "/") {
    loadCSS("/css/HomeComponent.css");
  } else if (currentPath === "/photo/board") {
    loadCSS("/css/photoBoard.css");
  } else if (currentPath === "/photo/post") {
    loadCSS("/css/photoForm.css");
  } else if (currentPath === "/diary/post") {
    loadCSS("/css/diaryForm.css");
  } else if (currentPath.startsWith("/diary")) {
    loadCSS("/css/diaryDate.css");
  }
  //  else if (currentPath.startsWith("/photo")) {
  //   loadCSS("/css/Photo.css");
  // }
  else if (currentPath === "/visitor") {
    loadCSS("/css/visitor.css");
  }

  const homeActive = currentPath === "/" ? "active-tab-item" : "tab-item";
  const diaryActive = currentPath.startsWith("/diary") ? "active-tab-item" : "tab-item";
  const postActive = currentPath.startsWith("/photo") ? "active-tab-item" : "tab-item";
  const visitorActive = currentPath === "/visitor" ? "active-tab-item" : "tab-item";

  const mainLayout = `
    <div class="wrapper">
      <div class="wrapper-line">
        <div class="profile-wrapper">
          <div id="visitor-count">Today <span id="visitor-today">&nbsp${null}&nbsp</span> | Total ${null}</div>
          <div class="profile"></div>
        </div>
        <div class="main-wrapper">
          <div class="header-box">
            <div class="intro">열심히 개발ㅎrㅈr...S2</div>
            <div class="outro">Hello, Doori World!</div>
          </div>
          <div class="content-area"> 
            <div class="white-box">
              ${content}
            </div>
            <div class="tab-container">
              <div class="${homeActive}" >
                <a href="/" data-link>홈</a>
              </div>
              <div class="${diaryActive}">
                <a href="${setDiaryLinkToToday()}" data-link id="diary-link">다이어리</a>
              </div>
              <div class="${postActive}">
                <a href="/photo/board" data-link>포토</a>
              </div>
              <div class="${visitorActive}">
                <a href="/visitor"data-link>방명록</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelector("#app").innerHTML = mainLayout;

  await loadComponent("/js/components/common/Profile.js");
  const profileContent = document.querySelector(".profile");
  profileContent.innerHTML = Profile();
}
