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
      <div className="bg-white">
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
        <div className="flex flex-col relative shadow  border rounded text-gray-700 bg-white -mt-12 ml-64 mr-64 z-10">
          <div className="mt-3 mb-3 text-green-500 text-xl font-bold font-sans text-center uppercase">
            {recipe.title}
          </div>
          <div>
            <RecipeInput recipe={recipe}></RecipeInput>
          </div>
        </div>
        <div>
          <Ingredients recipe={recipe}></Ingredients>
        </div>
        <div>
          <Methods recipe={recipe}></Methods>
        </div>
        <div className="flex justify-around mt-4 ">
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
      </div>
    </div>
  );
}
