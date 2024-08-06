async function MainComponent(content) {
  const loadCSS = href => {
    if (document.querySelector(`link[href="${href}"]`)) {
      // 이미 로드된 CSS 파일이면 아무 작업도 하지 않음
      return;
    }

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
  } else if (currentPath.startsWith("/diary")) {
    loadCSS("/css/diaryDate.css");
    loadCSS("/css/diaryForm.css");
  }
  //  else if (currentPath.startsWith("/photo")) {
  //   loadCSS("/css/Photo.css");
  // } else if (currentPath === "/visitor") {
  //   loadCSS("/css/Visitor.css");
  // }

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
                <a href="#" data-link id="diary-link">다이어리</a>
              </div>
              <div class="${postActive}">
                <a href="/photo" data-link>포토</a>
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
