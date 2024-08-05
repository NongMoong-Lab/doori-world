function checkToday(year, month, day) {
  const today = new Date();
  if (year == today.getFullYear() && month == parseInt(today.getMonth()) + 1 && day == today.getDate()) {
    return true;
  }
  return false;
}

function getDateTemplate(year, month) {
  let lastDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 윤년 계산
  if ((parseInt(year) % 4 == 0 && parseInt(year) % 100 != 0) || parseInt(year) % 400 == 0) {
    lastDates[1] = 29;
  }

  let dateTemplate = `
    <table>
      <tr>
        <td colspan="5" id="month">
          <button id="btn-prev-month" onclick="renderPrevMonth(${year}, ${month})">◀️</button>
          <span>${year}.${month}</span>
          <button id="btn-next-month" onclick="renderNextMonth(${year}, ${month})">▶️</button>
        </td>
  `;

  for (let i = 1; i < 14; i++) {
    if (checkToday(year, month, i)) {
      dateTemplate += `<td id="today" onclick="changeDate(event)">${i}</td>`;
    } else {
      dateTemplate += `<td onclick="changeDate(event)">${i}</td>`;
    }
  }
  dateTemplate += "</tr><tr>";
  for (let i = 14; i <= lastDates[parseInt(month) - 1]; i++) {
    if (checkToday(year, month, i)) {
      dateTemplate += `<td id="today onclick="changeDate(event)"">${i}</td>`;
    } else {
      dateTemplate += `<td onclick="changeDate(event)">${i}</td>`;
    }
  }
  dateTemplate += "</tr></table>";

  return dateTemplate;
}

function renderPrevMonth(year, month) {
  const calendarContainer = document.querySelector(".calendar-container");
  let newMonth = parseInt(month) - 1;
  let newYear = year;
  if (newMonth < 1) {
    newMonth = 12;
    newYear -= 1;
  }
  newMonth = newMonth < 10 ? "0" + parseInt(newMonth).toString() : parseInt(newMonth).toString();
  calendarContainer.innerHTML = getDateTemplate(newYear, newMonth, 1);
}

function renderNextMonth(year, month) {
  const calendarContainer = document.querySelector(".calendar-container");
  let newMonth = parseInt(month) + 1;
  let newYear = year;
  if (newMonth > 12) {
    newMonth = 1;
    newYear += 1;
  }
  newMonth = newMonth < 10 ? "0" + parseInt(newMonth).toString() : parseInt(newMonth).toString();
  calendarContainer.innerHTML = getDateTemplate(newYear, newMonth, 1);
}

function changeDate(event) {
  // todo: 클릭한 날짜 게시물 get 요청
  console.log("click date: ", event.target.textContent);
}

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function DiaryDate(today) {
  if (!document.querySelector('link[href="/css/diaryDate.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/diaryDate.css";
    document.head.appendChild(link);
  }

  const date = new Date(today.slice(0, 4), parseInt(today.slice(4, 6)) - 1, today.slice(6, 8));
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? "0" + (parseInt(date.getMonth()) + 1).toString() : (parseInt(date.getMonth()) + 1).toString();
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  // todo: diary 정보 get 요청
  const diaryId = "dummy-id";
  const diaryWriter = "dummy-writer";
  const diaryContent = "오늘은 날씨가 너무 더<br/>웠다.<br/><br/>방가방가";
  // todo: comment 정보 get 요청
  const commentId = "dummy-id";
  const commentWriter = "dummy-writer";
  const commentWriteAt = "2024.08.04 22:12";
  const commentContent = "안녕";

  const component = `
    <div class="diary-wrapper">
      <div class="calendar">
        <div class="calendar-today">
          <span>${month}.${day}</span>
          <span>${daysOfWeek[date.getDay()]}</span>
        </div>
        <div class="calendar-container">
          ${getDateTemplate(year, month)}
        </div>
      </div>
      <hr />
      <div class="diary-post">
        <button id="btn-diary-post">🖉글쓰기</button>
      </div>
      <div class="diary-container" id="diary-${diaryId}">
        <div class="diary-info">
          <span>${year}.${month}.${day}</span>
          <span>${diaryWriter}</span>
        </div>
        <div class="diary-content">
          <span>${diaryContent}</span>
          <div class="diary-edit-wrapper">
            <button id="btn-diary-edit">수정</button>
            <button id="btn-diary-remove">삭제</button>
          </div>
        </div>
        <div class="diary-comment-container">
          <form class="form-diary-comment">
            <label>댓글</label>
            <input type="text" name="diary-comment" />
            <button type="submit">확인</button>
          </form>
          <div class="diary-comment-wrapper" id="comment-${commentId}">
            <div class="diary-comment-info">
              <span>
                <span>no.${commentId} ${commentWriter}</span>
                <span id="diary-comment-writeAt">${commentWriteAt}<span>
              </span>
            </div>
            <div class="diary-comment-content">
              <img src="/resource/images/profile.png" width=100 height=100 />
              <div id="diary-comment-content">${commentContent}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return component;
}
