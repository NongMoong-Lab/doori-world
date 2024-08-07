const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const loadComponent = scriptSrc => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      // <script> 태그가 이미 존재하는 경우 Promise를 resolve
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${scriptSrc}`));
    document.head.appendChild(script);
  });
};

const routes = [
  {
    path: "/",
    view: async () => {
      await loadComponent("/js/components/HomeComponent.js");
      await loadComponent("/js/components/MainComponent.js");
      MainComponent(HomeComponent());
    },
  },
  {
    path: "/login",
    view: async () => {
      await loadComponent("/js/components/loginForm.js");
      loginForm();
    },
  },
  {
    path: "/diary/post",
    view: async () => {
      await loadComponent("/js/components/MainComponent.js");
      await loadComponent("/js/components/diary/DiaryForm.js");
      MainComponent(DiaryForm());
    },
  },
  {
    path: "/diary/:date",
    view: async params => {
      await loadComponent("/js/components/MainComponent.js");
      await loadComponent("/js/components/diary/DiaryDate.js");
      MainComponent(DiaryDate(params.date));
    },
  },
  {
    path: "/photo/board",
    view: async () => {
      await loadComponent("/js/components/MainComponent.js");
      await loadComponent("/js/components/photo/photoBoard.js"); 
      MainComponent(photoBoard()); 
    },
  },
  {
    path: "/photo/post",
    view: async () => {
      await loadComponent("/js/components/MainComponent.js");
      await loadComponent("/js/components/photo/photoForm.js"); 
      MainComponent(photoForm());
    },
  },
  {
    path: "/visitor",
    view: async () => {
      await loadComponent("/js/components/MainComponent.js");
      await loadComponent("/js/components/visitor/VisitorComponent.js");
      MainComponent(VisitorComponent());
    },
  },
];

const router = async () => {
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let matchRoute = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!matchRoute) {
    document.querySelector("#app").innerHTML = "<h1>404 not found</h1>";
    return;
  }

  const params = getParams(matchRoute);
  await matchRoute.route.view(params);
  setDiaryLinkToToday();
  // const view = await matchRoute.route.view(params);
  // document.querySelector("#app").innerHTML = view;
};

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = matchRoute => {
  const values = matchRoute.result.slice(1); // 실제 url 에서 date 영역 가져오기
  const keys = Array.from(matchRoute.route.path.matchAll(/:(\w+)/g)).map(result => result[1]); // 동적 라우팅 ":date" 에서 "date" 가져오기
  return Object.fromEntries(keys.map((key, i) => [key, values[i]])); // result ex: { date: "20240729" }
};

const setDiaryLinkToToday = () => {
  const diaryLink = document.getElementById("diary-link");
  console.log("diaryLink:", diaryLink);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}${month}${day}`;

  diaryLink.href = `/diary/${formattedDate}`;
};

window.addEventListener("popstate", router); // 뒤로 가기 or 앞으로 가기

document.addEventListener("DOMContentLoaded", () => {
  router();

  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); // 새로고침 막기
      const url = e.target.getAttribute("href"); // href 속성을 가져와서 navigateTo 호출
      navigateTo(url);
    }
  });
});
