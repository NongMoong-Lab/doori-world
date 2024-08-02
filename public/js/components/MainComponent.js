async function MainComponent() {
  const content = `
    <div class="wrapper">
      <div class="wrapper-line">
        <div class="profile-wrapper">
          <div id="visitor-count">Today ${null} | Total ${null}</div>
          <div class="profile"></div>
        </div>
        <div class="main-wrapper"></div>
      </div>
    </div>
  `;

  document.querySelector("#app").innerHTML = content;

  await loadComponent("/js/components/common/Profile.js");
  const profileContent = document.querySelector(".profile");
  profileContent.innerHTML = Profile();
}
