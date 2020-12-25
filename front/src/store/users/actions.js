import axios from "axios";
import { setConnectedUser } from "./reducer";

export function signUp(user) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/auth/signup", user)
      .then((res) => res.json())
      .then(({ user, token }) => {
        dispatch(setConnectedUser({ user, token }));
      });
  };
}

export function login(user) {
  console.log(`user:`, user);
  return function (dispatch) {
    axios
      .post("http://localhost:3001/auth/login", user)
      .then((res) => res.data)
      .then(({ user, token }) => {
        dispatch(setConnectedUser({ user, token }));
      });
  };
}
