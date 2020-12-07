import React from "react";
import "./PageWrapper.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faHome,
  faUtensils,
  faUtensilSpoon,
} from "@fortawesome/free-solid-svg-icons";

export default function DesignPage({ children }) {
  return (
    <div className="app-container flex">
      <div className="sidebar shadow">
        <div className="logocontainer justify-center my-10 mx-7">
          <Link to="/">
            <div className="font-sans font-bold text-3xl m-auto text-center  uppercase flex flex-row items-center">
              <div className="text-green-500">Cook</div>
              <div className="border border-green-500 border-opacity-100 rounded-full w-10 h-10 flex justify-center items-center">
                <div className="flex justify-center h-6 w-9 items-center -ml-3">
                  <FontAwesomeIcon
                    icon={faUtensilSpoon}
                    color="#FB923C"
                    className="transform -rotate-45 -mr-2"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faUtensils}
                    size="xs"
                    color="#FB923C"
                  />
                </div>
              </div>
              <div className="text-orange-400">Eat</div>
            </div>
          </Link>
        </div>
        <div className="menu p-6 text-orange-400 flex flex-col items-center">
          <div className="text-left hover:bg-orange-400 mb-2 rounded-full hover:text-white w-56 text-xl">
            <Link
              to="/"
              className="py-2 pl-6 pr-3 inline-block w-full flex items-center"
            >
              <FontAwesomeIcon
                icon={faHome}
                color="#FB923C"
                size="sm"
              ></FontAwesomeIcon>
              <div className="ml-1">Accueil</div>
            </Link>
          </div>
          <div className="text-left hover:bg-orange-400 mb-2 rounded-full hover:text-white w-56 text-xl">
            <Link
              to="/createRecipe"
              className="py-2 pl-6 pr-3 inline-block w-full flex items-center"
            >
              <FontAwesomeIcon
                icon={faEdit}
                color="#FB923C"
                size="sm"
              ></FontAwesomeIcon>
              <div className="ml-1">Créer une recette</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="main-content-container w-full">
        <div className="header shadow ">
          <div className="flex items-center p-6 bg-orange-400">
            <div class="text-gray-600 m-3 w-1/3 relative">
              <input
                type="search"
                placeholder="Rechercher une recette"
                className=" bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none w-full"
              ></input>
              <button className="absolute right-0 top-0 mt-2.5 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 stroke-current text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="recipescontent container mx-auto">{children}</div>
      </div>
    </div>
  );
}
