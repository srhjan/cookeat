import React from "react";
import "./PageWrapper.css";
import { Link } from "react-router-dom";

export default function DesignPage({ children }) {
  return (
    <div className="app-container flex">
      <div className="sidebar shadow bg-orange-400">
        <div className="logocontainer flex justify-center p-8">
          <div className="font-sans font-bold text-3xl m-auto text-center text-white uppercase">
            Cookeat
          </div>
        </div>
        <div className="menu p-6 text-white">
          <div className="pb-2 ">
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/createRecipe">Créer une recette</Link>
          </div>
        </div>
      </div>
      <div className="main-content-container w-full">
        <div className="header shadow ">
          <div className="searchbar flex items-center p-6 bg-white">
            <input
              className="inputsearch shadow bg-gray-100 rounded-lg "
              type="text"
              placeholder="Rechercher une recette"
            ></input>
          </div>
        </div>
        <div className="recipescontent container mx-auto">{children}</div>
      </div>
    </div>
  );
}
