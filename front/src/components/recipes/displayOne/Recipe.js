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
    <div className="bg-white p-3 mt-3">
      <div className="flex flex-col shadow appearance-none border rounded py-2 px-3 text-gray-700 h-64 mt-3 bg-white">
        <div className="photo-container">Photo</div>
      </div>
      <div className="flex flex-col shadow appearance-none border rounded text-gray-700 bg-white -mt-12 ml-64 mr-64">
        <div className="mt-3 mb-3 text-teal-400 text-xl font-bold font-sans text-center uppercase">
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
  );
}
