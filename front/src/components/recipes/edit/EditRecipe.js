import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { find } from "lodash";
import { findOneRecipe } from "../../../store/recipes/actions";
import CreateRecipe from "../create/CreateRecipe";

export default function EditRecipe() {
  const { recipe_id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) =>
    find(state.recipes.list, { recipe_id })
  );

  console.log(recipe);
  useEffect(() => {
    dispatch(findOneRecipe(recipe_id));
  }, []);

  if (!recipe) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <CreateRecipe recipe={recipe}></CreateRecipe>
    </div>
  );
}
