import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faClock,
  faBlender,
} from "@fortawesome/free-solid-svg-icons";
import whisk from "../../../assets/beater.svg";
import "./Design.css";

export default function Title({ recipe }) {
  return (
    <div className="infos-recipe flex flex-row mb-2 text-lg font-thin">
      <div>
        <FontAwesomeIcon icon={faUserFriends} size="sm" color="#FB923C" />
        <span className="ml-4 ">{recipe.servings}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faBlender} size="sm" color="#FB923C" />
        <span className="ml-4">{recipe.prep_time}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faClock} size="sm" color="#FB923C" />
        <span className="ml-3"> {recipe.cook_time}</span>
      </div>
    </div>
  );
}
