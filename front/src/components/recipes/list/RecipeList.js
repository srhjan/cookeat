import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findAllRecipes } from "../../../store/recipes/actions";
import "./Design.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faClock,
  faBlender,
} from "@fortawesome/free-solid-svg-icons";
import whisk from "../../../assets/beater.svg";

export default function RecipeList() {
  // Selector va permettre de sélectionner un bout du state.
  const recipes = useSelector((state) => state.recipes.list);
  const dispatch = useDispatch();
  // useEffect permet de ne pas exécuter la fonction à chaque rendu d'un component.
  // A partir du moment où le tableau est inchangé, il ne va pas rééxécuter la fonction dans le UseEffect.
  // Dès qu'il y a un changement dans le tableau, il l'éxécutera.
  useEffect(() => {
    dispatch(findAllRecipes());
  }, []);

  return (
    <div>
      <div>
        <div></div>
      </div>
      <div className="flex flex-row text-lg font-thin">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.recipe_id}>
              <Link to={`/recipe/${recipe.recipe_id}`}>
                <div className="recipe transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow border rounded ml-5 h-48 py-2 px-3 text-gray-700 mt-6 bg-white">
                  {recipe.picture ? (
                    <img
                      className="photorecipe flex justify-center items-center object-cover h-full w-full"
                      src={recipe.picture}
                    />
                  ) : (
                    <>
                      <div className="photorecipe flex justify-center items-center">
                        Pas de photo
                      </div>
                      <div className="line border "></div>
                    </>
                  )}
                  <div className="infosrecipe ">
                    <div className="flex justify-center mt-2">
                      {recipe.title}
                    </div>
                    <div className="flex flex-row mt-2 justify-around">
                      <div>
                        <FontAwesomeIcon
                          icon={faUserFriends}
                          size="sm"
                          color="#22C55E"
                        />
                        <span className="ml-4">{recipe.servings}</span>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faBlender}
                          size="sm"
                          color="#22C55E"
                        />
                        <span className="ml-4">{recipe.prep_time}</span>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faClock}
                          size="sm"
                          color="#22C55E"
                        />
                        <span className="ml-3"> {recipe.cook_time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
