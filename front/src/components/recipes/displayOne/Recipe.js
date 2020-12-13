import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { findOneRecipe, removeOneRecipe } from "../../../store/recipes/actions";
import { useDispatch, useSelector } from "react-redux";
import { find } from "lodash";
import RecipeInput from "./RecipeInput";
import Ingredients from "./Ingredients";
import Methods from "./Methods";
import RemoveButton from "./RemoveButton";
import UpdateButton from "./UpdateButton";
import "./Design.css";

export default function Recipe() {
  const [recipeDeleted, setRecipeDeleted] = useState(false);
  const { recipe_id } = useParams();
  // useParams permet de récupèrer les paramètres dans l’url donc ici, l'id de la recette.
  const dispatch = useDispatch();
  const recipe = useSelector((state) =>
    find(state.recipes.list, { recipe_id })
  );

  useEffect(() => {
    dispatch(findOneRecipe(recipe_id));
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  if (recipeDeleted) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="bg-gray-50">
        <div className="picture flex flex-col relative appearance-none border-none rounded text-gray-700 bg-white z-0">
          {recipe.picture ? (
            <img className="object-cover h-full w-full" src={recipe.picture} />
          ) : (
            <>
              <div className="flex w-full h-full justify-center items-center font-thin">
                Pas de photo
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col relative border mb-6 rounded text-gray-700 bg-white -mt-12 max-w-lg mx-auto z-10">
          <div className="mt-3 mb-3 text-green-500 text-xl font-bold font-sans text-center uppercase">
            {recipe.title}
          </div>
          <div>
            <RecipeInput recipe={recipe}></RecipeInput>
          </div>
        </div>
        <div class="max-w-4xl mx-auto text-left font-light border rounded-lg bg-white">
          <div className="flex justify-end mt-4 mr-2">
            <Link to={`/recipe/${recipe.recipe_id}/edit`}>
              <UpdateButton></UpdateButton>
            </Link>
            <RemoveButton
              onClick={() => {
                dispatch(removeOneRecipe(recipe.recipe_id));
                setRecipeDeleted(true);
              }}
            ></RemoveButton>
          </div>
          <div class="max-w-xl mx-auto">
            <div>
              <Ingredients recipe={recipe}></Ingredients>
            </div>
            <div>
              <Methods recipe={recipe}></Methods>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
