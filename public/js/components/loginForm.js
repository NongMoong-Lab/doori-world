function handleLogin(event) {
  event.preventDefault();
  const inputId = document.getElementById("userId").value;
  const inputPw = document.getElementById("password").value;
  const inputUser = {
    input_id: inputId,
    input_pw: inputPw,
  };

  // API 요청
  fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputUser),
  })
    .then(response => response.json())
    .then(data => {
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        window.location.assign("/"); // 로그인 성공 후 리다이렉트
      } else {
        throw new Error(data.error || "Login Error");
      }
    })
    .catch(error => console.error("Error:", error));
}

function loginForm() {
  // 이미 스타일시트가 로드되어 있는지 확인
  if (!document.querySelector("link[href='/css/login.css']")) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/login.css";
    document.head.appendChild(link);
  }

  const content = `
    <form id="loginForm" onsubmit="handleLogin(event)">
        <div class="header">
            <img src="/resource/images/Doori-world.png" alt="Doori World Logo">
            <h2>Doori World</h2>
        </div>
        <label for="userId">이메일 아이디</label>
        <input type="text" id="userId" name="userId" placeholder="이메일 아이디" required />
        <label for="password">비밀번호</label>
        <input type="password" id="password" name="password" placeholder="비밀번호" required />
        <button type="submit">구경하러 가기</button>
    </form>
  `;

  return content;
}
