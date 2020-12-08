import React from "react";
import "./Design.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faClock,
  faBlender,
} from "@fortawesome/free-solid-svg-icons";

export default function RecipeInput({ recipe }) {
  return (
    <div>
      <div className="flex justify-center mt-2">{recipe.title}</div>
      <div className="flex flex-row mt-2 justify-around">
        <div>
          <FontAwesomeIcon icon={faUserFriends} size="sm" color="#22C55E" />
          <span className="ml-4">{recipe.servings}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBlender} size="sm" color="#22C55E" />
          <span className="ml-4">{recipe.prep_time}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} size="sm" color="#22C55E" />
          <span className="ml-3"> {recipe.cook_time}</span>
        </div>
      </div>
    </div>
  );
}
