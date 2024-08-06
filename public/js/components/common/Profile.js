function Profile() {
  if (!document.querySelector('link[href="/css/profile.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/profile.css";
    document.head.appendChild(link);
  }

  window.onload = function () {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
      const audio = new Audio("/resource/sound/warr.mp3");
      audio.play();
      audio.loop = true;
    });
  };

  const text = "❤️ 사랑";
  const textIntro = "웰컴...<br/>To..두리..<br/>월드 S2";
  const music = "와르르 - 콜드(Colde)";
  const content = `
      <div class="profile-photo">
        <img src="/resource/images/profile.png"/>
        <button id="btn-photo-upload">📷 Photo Upload</button>
      </div>
      <div class="intro-wrapper">
        <div id="intro-state"><span>Today is ...</span>&nbsp${text}</div>
        <div id="intro-text">${textIntro}</div>
      </div>
      <div class="music-display">
        <span>🎧
          <div id="music-container">
            <div id="music-animation">${music}</div>
          </div>
        </span>
        <div class="music-btn-wrapper">
          <button class="music-btn" id="btn-music-start">▶️</button>
          <button class="music-btn" id="btn-music-stop">||</button>
        </div>
      </div>
      <div class="history-wrapper">
        <span>🔶 HISTORY</span>
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
