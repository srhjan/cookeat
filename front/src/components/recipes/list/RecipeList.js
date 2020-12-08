import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findAllRecipes } from "../../../store/recipes/actions";
import "./Design.css";
import RecipeInput from "./RecipeInput";
import SearchBar from "./SearchBar";

export default function RecipeList() {
  const [searchTitle, setSearchTitle] = useState("");
  // Selector va permettre de sélectionner un bout du state.
  const recipes = useSelector((state) => state.recipes.list);
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchTitle.toLowerCase());
  });
  const dispatch = useDispatch();
  // useEffect permet de ne pas exécuter la fonction à chaque rendu d'un component.
  // A partir du moment où le tableau est inchangé, il ne va pas rééxécuter la fonction dans le UseEffect.
  // Dès qu'il y a un changement dans le tableau, il l'éxécutera.
  useEffect(() => {
    dispatch(findAllRecipes());
  }, []);

  return (
    <div>
      <div className="header shadow bg-orange-400 w-full h-28 items-center">
        <SearchBar
          recipeTitle={searchTitle}
          onChange={(title) => setSearchTitle(title)}
        ></SearchBar>
      </div>
      <div>
        <div></div>
      </div>
      <div className="flex flex-row text-lg font-thin">
        {filteredRecipes.map((recipe) => {
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
                    <RecipeInput recipe={recipe}></RecipeInput>
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
