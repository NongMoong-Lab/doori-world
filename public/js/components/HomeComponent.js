function loadCSS() {
  const link = document.createElement("link");
  link.href = "/css/HomeComponent.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

function HomeComponent() {
  loadCSS();

  const diaryContents = [
    "다이어리 내용1",
    "다이어리 내용2",
    "다이어리 내용3",
    "다이어리 내용4",
  ];
  const photos = [
    "/resource/images/couple.png",
    "/resource/images/nongmoong.png",
    "/resource/images/Doori-world.png",
    "/resource/images/miniroom.png",
  ];
  const miniroomImage = "/resource/images/mini.png";
  const visitorComments = [
    "방명록 내용 1",
    "방명록 내용 2",
    "방명록 내용 3",
    "방명록 내용 4",
  ];

  const diaryHtml = diaryContents
    .slice(0, 3)
    .map((content) => `<div class="diary-item">${content}</div>`)
    .join("");
  const photosHtml = photos
    .slice(0, 3)
    .map((photo) => `<img src="${photo}">`)
    .join("");
  const visitorsHtml = visitorComments
    .slice(0, 2)
    .map((comment) => `<div class="visitor-comment-item">${comment}</div>`)
    .join("");

  return ` 
    <div class="home-container">
     <div class="top-section">
        <div class="Diary-section">
          <div class="Diary-title">
            Diary
          </div>
          <div class="Diary-show"> 
            ${diaryHtml}
          </div>
        </div>
        <div class="photo-section">
          <div class="photo-title">
            Photo
          </div>
          <div class="photo-gallery">
            ${photosHtml}
          </div>
        </div>
      </div>
      <div class="miniroom-section">
        <div class="miniroom-title">
          Mini Room
        </div>
        <div class="miniroom-image">
          <img src="${miniroomImage}" alt="Mini Room">
        </div>
      </div>
      <div class="visitor-section">
        <div class="visitor-title">
          What Visitors Say
        </div> 
        <div class="visitor-comment">
          ${visitorsHtml}
        </div>
      </div>
    </div>
  `;
}
