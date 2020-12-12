import React from "react";
import "./PageWrapper.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";

export default function DesignPage({ children }) {
  return (
    <div className="app-container flex">
      <div className="sidebar shadow">
        <div className="logocontainer justify-center my-10">
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>
        <Menu></Menu>
      </div>
      <div className="main-content-container w-full">
        <div className="recipescontent container mx-auto">{children}</div>
      </div>
    </div>
  );
}
