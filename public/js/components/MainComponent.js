function MainComponent(content) {
  const currentPath = window.location.pathname;

  const homeActive = currentPath === "/" ? "active-tab-item" : "tab-item";
  const diaryActive = currentPath.startsWith("/diary")
    ? "active-tab-item"
    : "tab-item";
  const postActive = currentPath.startsWith("/photo")
    ? "active-tab-item"
    : "tab-item";
  const visitorActive =
    currentPath === "/visitor" ? "active-tab-item" : "tab-item";

  const component = `
    <div class="wrapper">
      <div class="wrapper-line">
        <div class="profile-wrapper"></div>
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
  return component;
}
