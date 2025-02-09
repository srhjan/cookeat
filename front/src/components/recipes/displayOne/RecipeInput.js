import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faClock,
  faBlender,
} from "@fortawesome/free-solid-svg-icons";
import "./Design.css";

export default function Title({ recipe }) {
  return (
    <div className="infos-recipe flex flex-row mb-2 text-lg font-light">
      <div>
        <FontAwesomeIcon icon={faUserFriends} size="sm" color="#FB923C" />
        <span className="ml-2">{recipe.servings}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faBlender} size="sm" color="#FB923C" />
        <span className="ml-2">{recipe.prep_time}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faClock} size="sm" color="#FB923C" />
        <span className="ml-2"> {recipe.cook_time}</span>
      </div>
    </div>
  );
}
