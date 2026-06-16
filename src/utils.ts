export function storeUserId(uid: string) {
  localStorage.setItem("uid", uid);
}

export function getUserId() {
  return localStorage.getItem("uid");
}

export function removeUserId() {
  localStorage.removeItem("uid");
}
