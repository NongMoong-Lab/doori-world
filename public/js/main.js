document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
        <nav>
            <a href="#home">Home</a>
            <a href="#login">Login</a>
        </nav>
        <div id="content"></div>
    `;

  const routes = {
    home: "<h2>Home Page</h2><p>This is the home page content.</p>",
    login: createLoginForm(),
  };

  window.addEventListener("hashchange", () => {
    const hash = location.hash.substring(1);
    const content = routes[hash] || "<h2>404</h2><p>Page not found</p>";
    document.getElementById("content").innerHTML = content;
  });

  window.dispatchEvent(new HashChangeEvent("hashchange"));
});
