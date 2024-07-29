function getLoginForm() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/css/login.css';
  document.head.appendChild(link);

  return `
    <form id="loginForm">
        <div class="header">
            <img src="/images/Doori-world.png" alt="Doori World Logo">
            <h2>Doori World</h2>
        </div>
        <label for="userId">아이디</label>
        <input type="text" id="userId" name="userId" placeholder="아이디를 입력해주세요." required />
        <label for="password">비밀번호</label>
        <input type="password" id="password" name="password" placeholder="비밀번호를 입력해주세요." required />
        <button type="submit">구경하러 가기</button>
    </form>
  `;
}
