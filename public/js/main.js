document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div id="content"></div>
    `;

  const routes = { // 추후 삭제해도 되는 코드
    home: "<h2>Home Page</h2>",
  };

  function loadComponent(scriptSrc, callback) {
    const script = document.createElement('script'); 
    script.src = scriptSrc; 
    script.onload = callback;
    document.head.appendChild(script); 
  }

  window.addEventListener("hashchange", () => {
    const hash = location.hash.substring(1); 
    if (hash === "login") {
      loadComponent('/js/components/loginForm.js', () => {
        loginForm(); 
      });
    } else {
      const content = routes[hash] || "<h2>404</h2><p>Page not found</p>";
      document.getElementById("content").innerHTML = content;
    }
  });

  window.dispatchEvent(new HashChangeEvent("hashchange"));
});
