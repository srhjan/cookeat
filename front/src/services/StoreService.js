const USER_STORAGE_KEY = "CURRENT_USER";

export function saveUser(payload) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(payload));
}

export function getUser() {
  const savedUser = localStorage.getItem(USER_STORAGE_KEY) || "{}";
  return JSON.parse(savedUser);
}
