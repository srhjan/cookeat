import React, { useState } from "react";
import "./PageWrapper.css";
import Logo from "./Logo";
import Menu from "./Menu";

export default function DesignPage({ children }) {
  return (
    <div className="app-container flex">
      <div className="sidebar shadow">
        <Logo></Logo>
        <Menu></Menu>
      </div>
      <div className="main-content-container w-full">
        <div className="recipescontent container mx-auto">{children}</div>
      </div>
    </div>
  );
}
