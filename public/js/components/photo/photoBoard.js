function photoBoard() {
  const photos = [
    "/resource/images/couple.png",
 
  ];

  const photosHtml = photos.map(photo => `<img src="${photo}" class="photo-image">`).join("");

  return `
    <div>
      <div class="photo-post"> 
        <button class="btn-photo-post" onclick="navigateTo('/photo/post')">🖉사진 올리기</button>
      </div>
      <div class="photo-title>제목</div>
      <div class="photo-info">
        <div class="photo-write-info">
          <div class="writer">작성자</div>
          <div class="date">작성일자</div>
          <div class="photo-edit-wrapper">
            <button id="btn-photo-edit">수정</button>
            <button id="btn-photo-remove">삭제</button>
          </div>
        </div>
      </div>
      <div class="photo-gallery">${photosHtml}</div>
      <div class="photo-comment-container">
          <form class="form-photo-comment">
            <label>댓글</label>
            <input type="text" name="photo-comment" />
            <button type="submit">확인</button>
          </form>
          <div class="photo-comment-wrapper"s>
            <div class="photo-comment-info">
              <span>
                <span>no.번호</span>
                <span id="photo-comment-writeAt">댓글작성자<span>
              </span>
            </div>
            <div class="photo-comment-content">
              <img src="/resource/images/profile.png" width=100 height=100 />
              <div id="photo-comment-content">댓글내용</div>
            </div>
          </div>
        </div>
    </div>
  `;
}
