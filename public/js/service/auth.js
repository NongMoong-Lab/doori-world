function getToken() {
  const token = localStorage.getItem("token");
  return token;
}

// Base64Url 디코딩 함수
function base64UrlDecode(base64Url) {
  // Base64Url -> Base64 변환
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  // Base64 문자열의 패딩 조정
  let padding = base64.length % 4;
  if (padding > 0) {
    base64 += "=".repeat(4 - padding);
  }

  // Base64 디코딩
  let binaryString = atob(base64);

  // Binary string을 Uint8Array로 변환
  let bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // TextDecoder로 UTF-8 문자열로 디코딩
  let decoder = new TextDecoder("utf-8");
  return decoder.decode(bytes);
}

// JWT 디코딩 함수
function decodeJwt(token) {
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid JWT token");
  }

  const payload = parts[1];
  const decodedPayload = base64UrlDecode(payload);

  // 디코딩된 문자열을 JSON으로 파싱
  return JSON.parse(decodedPayload);
}

function handleLogout() {
  localStorage.removeItem("token");
  window.location.assign("/");
}

function changeLoginButton() {
  const loginWrapper = document.querySelector(".login-wrapper");
  const loginBtn = loginWrapper.querySelector("button");
  const token = getToken();
  if (token) {
    const currentUserSpan = document.createElement("span");
    currentUserSpan.textContent = `${decodeJwt(token).userId}님`;
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "로그아웃";
    logoutBtn.addEventListener("click", handleLogout);
    loginWrapper.insertBefore(currentUserSpan, loginBtn);
    loginWrapper.replaceChild(logoutBtn, loginBtn);
  }
}
changeLoginButton();

function preventLoginAccess(url) {
  if (url === "/login" && getToken() != null) {
    window.location.assign("/");
    return false;
  }
  return true;
}
preventLoginAccess(window.location.pathname);
