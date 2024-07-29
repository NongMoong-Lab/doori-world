document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Welcome to My SPA</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
        <div id="content"></div>
    `;

  const routes = {
    home: "<h2>Home Page</h2><p>This is the home page content.</p>",
    about: "<h2>About Page</h2><p>This is the about page content.</p>",
    contact: "<h2>Contact Page</h2><p>This is the contact page content.</p>",
  };

  window.addEventListener("hashchange", () => {
    const hash = location.hash.substring(1);
    const content = routes[hash] || "<h2>404</h2><p>Page not found</p>";
    document.getElementById("content").innerHTML = content;
  });

  window.dispatchEvent(new HashChangeEvent("hashchange"));
});
