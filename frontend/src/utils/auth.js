// simple cookie-based token helpers
export function setTokenCookie(token, days = 7) {
  const maxAge = days * 24 * 60 * 60; // seconds
  document.cookie = `token=${token}; Max-Age=${maxAge}; path=/`;
}

export function getTokenFromCookie() {
  const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
  return match ? match[2] : null;
}

export function removeTokenCookie() {
  document.cookie = 'token=; Max-Age=0; path=/';
}

export default { setTokenCookie, getTokenFromCookie, removeTokenCookie };
