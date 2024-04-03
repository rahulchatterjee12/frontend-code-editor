import Cookies from "universal-cookie";

const cookies = new Cookies();

function setTokens(access, refresh) {
  const options = { path: "/", maxAge: 2592000 };
  if (access) {
    cookies.set("access", access, options);
  }
  if (refresh) {
    cookies.set("refresh", refresh, options);
  }

  return getTokens();
}

function getTokens() {
  const tokens = {
    access: cookies.get("access") || null,
    refresh: cookies.get("refresh") || null,
  };
  return tokens;
}

function clearTokens() {
  const options = { path: "/" };
  cookies.remove("access", options);
  cookies.remove("refresh", options);
}

export { setTokens, getTokens, clearTokens };
