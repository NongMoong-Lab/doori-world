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
        <p>Diary</p>
      </div>
      <div class="Diary-show"> 
        <p>안녕하세요 저는 문건우입니다.</p>
        <p>민형이의 일기</p>
      </div>
    </div>
    <div class="photo-section">
      <div class="photo-title">
        <p>Photo</p>
      </div>
      <div class="photo-gallery">
        <img src="/resource/images/couple.png">
        <img src="/resource/images/nongmoong.png">
        <img src="/resource/images/Doori-world.png">
      </div>
    </div>
    <div class="miniroom-section">
      <div class="miniroom-title">
        <p>Mini Room</p>  
      </div>
      <div class="miniroom-image">
        <img src="/resource/images/miniroom.png" alt="Mini Room">
      </div>
    </div>
    <div class="visitor-section">
      <div class="visitor-title">
        <p>What Visitors Say</p>
      </div> 
      <div class="visitor-comment">
        <p>뇽하 (뭉)</p>
        <p>건하 (뇽)</p>
        <p>안뇨옹 (뭉)</p>
      </div>
    </div>
  </div>
`;
}
