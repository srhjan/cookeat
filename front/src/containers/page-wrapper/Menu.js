import React from "react";
import "./PageWrapper.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
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
  );
}
