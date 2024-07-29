document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Welcome to My SPA</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#login">Login</a>
        </nav>
        <div id="content"></div>
    `;

  const routes = {
    home: "<h2>Home Page</h2><p>This is the home page content.</p>",
    about: "<h2>About Page</h2><p>This is the about page content.</p>",
    contact: "<h2>Contact Page</h2><p>This is the contact page content.</p>",
    login: `
      <form id="loginForm">
          <img src="/images/Doori-world.png">
          <h2>Doori World</h2>
          <label for="userId">이메일 아이디 *</label>
          <input type="text" id="userId" name="userId" placeholder="이메일 아이디" required />
          <label for="password">비밀번호 *</label>
          <input type="password" id="password" name="password" placeholder="비밀번호" required />
          <button type="submit">구경하러 가기</button>
      </form>
    `,
  };

  window.addEventListener("hashchange", () => {
    const hash = location.hash.substring(1);
    const content = routes[hash] || "<h2>404</h2><p>Page not found</p>";
    document.getElementById("content").innerHTML = content;
  });

  window.dispatchEvent(new HashChangeEvent("hashchange"));
});
