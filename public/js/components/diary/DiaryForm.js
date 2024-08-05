function postDiary() {
  confirm("다이어리를 등록하시겠습니까?"); // todo: confirm 확인/취소 처리

  let newDiaryData = document.querySelector("#editor").innerHTML;
  newDiaryData = `<div>${newDiaryData}</div>`;
  console.log(newDiaryData);

  // todo: diary post 요청
}

function DiaryForm() {
  if (!document.querySelector('link[href="/css/diaryForm.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/diaryForm.css";
    document.head.appendChild(link);
  }

  const component = `
  <div class="diary-form-container">
    <div class="diary-post">
      <button id="btn-diary-post" onclick="postDiary()">🖉글쓰기</button>
    </div>
    <hr />
    <div id="toolbar">
      <select id="font-size">
        <option value="1">10pt</option>
        <option value="2">12pt</option>
        <option value="3">14pt</option>
        <option value="4">16pt</option>
        <option value="5">18pt</option>
        <option value="6">24pt</option>
        <option value="7">32pt</option>
      </select>
      <select id="font-family">
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
      </select>
      <button onclick="document.execCommand('bold', false, '');">Bold</button>
      <button onclick="document.execCommand('italic', false, '');">Italic</button>
      <button onclick="document.execCommand('underline', false, '');">Underline</button>
      <button onclick="document.execCommand('justifyLeft', false, '');">Left</button>
      <button onclick="document.execCommand('justifyCenter', false, '');">Center</button>
      <button onclick="document.execCommand('justifyRight', false, '');">Right</button>
      <button onclick="document.execCommand('insertUnorderedList', false, '');">Bullet List</button>
    </div>
    <div id="editor" contenteditable="true"></div>
  </div>
  `;
  return component;
}
