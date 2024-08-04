function loadCSS() {
  const link = document.createElement("link");
  link.href = "/css/HomeComponent.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

function HomeComponent() {
  loadCSS();
  return ` 
  <div class="home-container">
    <div class="Diary-section">
      <div class="Diary-title">
        Diary<hr>
      </div>
      <div class="Diary-show"> 
        안녕하세요 저는 문건우입니다.</br>
        <hr>
        민형이의 일기
        <hr>
      </div>
    </div>
    <div class="photo-section">
      <div class="photo-title">
        Photo<hr>
      </div>
      <div class="photo-gallery">
        <img src="/resource/images/couple.png">
        <img src="/resource/images/nongmoong.png">
        <img src="/resource/images/Doori-world.png">
      </div>
    </div>
    <div class="miniroom-section">
      <div class="miniroom-title">
        Mini Room<hr>
      </div>
      <div class="miniroom-image">
        <img src="/resource/images/mini.png" alt="Mini Room">
      </div>
    </div>
    <div class="visitor-section">
      <div class="visitor-title">
        What Visitors Say<hr>
      </div> 
      <div class="visitor-comment">
        뇽하~ (뭉)</br>
        <hr>
        건하~ (뇽)<hr>
      </div>
    </div>
  </div>
`;
}
