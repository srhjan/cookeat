import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faClock } from "@fortawesome/free-solid-svg-icons";
import whisk from "../../../assets/beater.svg";
import "./Design.css";

export default function Title({ recipe }) {
  return (
    <div className="infos-recipe flex flex-row mb-2 text-lg font-thin">
      <div>
        <FontAwesomeIcon icon={faUserFriends} size="sm" color="#feb2b2" />
        <span className="ml-4 ">{recipe.servings}</span>
      </div>
      <div className="flex">
        <img src={whisk} className="w-4"></img>
        <span className="ml-4">{recipe.prep_time}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faClock} size="sm" color="#feb2b2" />
        <span className="ml-3"> {recipe.cook_time}</span>
      </div>
    </div>
  );
}
