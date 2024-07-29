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
  };

  function loadLoginForm() {
    const script = document.createElement('script');
    script.src = '/js/components/loginForm.js';
    script.onload = () => {
      const content = getLoginForm();
      document.getElementById("content").innerHTML = content;
    };
    document.head.appendChild(script);
  }

  window.addEventListener("hashchange", () => {
    const hash = location.hash.substring(1);
    if (hash === "login") {
      loadLoginForm();
    } else {
      const content = routes[hash] || "<h2>404</h2><p>Page not found</p>";
      document.getElementById("content").innerHTML = content;
    }
  });

  window.dispatchEvent(new HashChangeEvent("hashchange"));
});
