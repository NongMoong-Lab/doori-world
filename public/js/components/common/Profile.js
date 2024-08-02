function Profile() {
  if (!document.querySelector('link[href="/css/profile.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/profile.css";
    document.head.appendChild(link);
  }

  const text = "❤️ 사랑";
  const textIntro = "웰컴...To..두리..월드 S2";
  const music = "Supernatural - NewJeans";
  const content = `
      <div class="profile-photo">
        <img src="/images/profile.png"/>
        <button id="btn-photo-upload">📷 Photo Upload</button>
      </div>
      <div>
        <div>Today is ... ${text}</div>
        <div>${textIntro}</div>
      </div>
      <div class="music-display">
        <p>🎧 <span id="music-animation">${music}<span></p>
        <p>▶️</p>
        <p style="display: none;">⏸️</p>
      </div>
      <div class="history-wrapper">
        <span>🔶HISTORY</span>
        <hr />
        <span class="history">
          <a href="https://github.com/NongMoong-Lab/doori-world">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="30" height="30">
            <span>Doori World Repository</span>
          </a>
          <a href="https://github.com/GEONU-MOON">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="30" height="30">
            <span>GEONU-MOON GitHub</span>
          </a>
          <a href="https://github.com/hyeong1">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="30" height="30">
            <span>hyeong1 GitHub</span>
          </a>
        </span>
      </div>
    `;
  return content;
}
