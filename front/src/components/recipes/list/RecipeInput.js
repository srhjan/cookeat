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
    <div className="px-2 py-2 text-gray-700 font-normal">
      <div className="flex justify-center leading-tight mt-1 mb-1 font-thin">
        {recipe.title}
      </div>
      <div className="flex flex-row justify-evenly">
        <div>
          <FontAwesomeIcon icon={faUserFriends} size="xs" color="#35d399" />
          <span className="text-gray-500 font-thin ml-1 mr-3 text-sm">
            {recipe.servings}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBlender} size="xs" color="#35d399" />
          <span className="text-gray-500 font-thin ml-1 mr-3 text-sm">
            {recipe.prep_time}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} size="xs" color="#35d399" />
          <span className="text-gray-500 font-thin ml-1 mr-3 text-sm">
            {recipe.cook_time}
          </span>
        </div>
      </div>
    </div>
  );
}
