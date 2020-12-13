import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import store from "./store";
import Router from "./Router";

ReactDOM.render(
  // ReduxProvider permet de rendre l'accès au store pour les components et émettre des actions
  <ReduxProvider store={store}>
    <Router />
  </ReduxProvider>,
  document.getElementById("root")
);
