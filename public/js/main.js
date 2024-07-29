const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const routes = [
  { path: "/", view: () => "<h1>Home</h1>" },
  { path: "/login", view: () => "<h1>Login</h1>" },
  { path: "/diary/post", view: () => "<h1>Diary Post</h1>" },
  { path: "/diary/:date", view: (params) => `<h1>Diary ${params.date}</h1>` },
  { path: "/photo", view: () => "<h1>Photo</h1>" },
  { path: "/photo/post", view: () => "<h1>Photo Post</h1>" },
  { path: "/visitor", view: () => "<h1>Visitor</h1>" },
];

const router = () => {
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let matchRoute = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!matchRoute) {
    document.querySelector("#app").innerHTML = `<h1>404 not found</h1>`;
    return;
  }

  const view = matchRoute.route.view(getParams(matchRoute));
  document.querySelector("#app").innerHTML = view;
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (matchRoute) => {
  const values = matchRoute.result.slice(1); // 실제 url 에서 date 영역 가져오기
  const keys = Array.from(matchRoute.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  ); // 동적 라우팅 ":date" 에서 "date" 가져오기
  return Object.fromEntries(keys.map((key, i) => [key, values[i]])); // result ex: { date: "20240729" }
};

window.addEventListener("popstate", router); // 뒤로 가기 or 앞으로 가기

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); // 새로고침 막기
      navigateTo(e.target.href);
    }
  });

  router();
});
