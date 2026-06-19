import type { Filters } from "./types";

export function storeUserId(uid: string) {
  localStorage.setItem("uid", uid);
}

export function getUserId() {
  return localStorage.getItem("uid");
}

export function removeUserId() {
  localStorage.removeItem("uid");
}

export function isValidCategory(query: string): query is Filters {
  if (
    query === "All" ||
    query === "Dairy, Bread & Eggs" ||
    query === "Snacks & Munchies" ||
    query === "Cold Drinks & Juices"
  )
    return true;
  return false;
}
