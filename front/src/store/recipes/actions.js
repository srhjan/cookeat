import axios from "axios";
import {
  setRecipes,
  setUnits,
  addRecipe,
  removeRecipe,
  updateRecipe,
} from "./reducer";

// axios permet de faire des requêtes http à son serveur / api

export function findAllRecipes() {
  return function (dispatch) {
    axios.get("http://localhost:3001/recipes").then((res) => {
      const recipes = res.data;
      dispatch(setRecipes(recipes));
    });
  };
}

export function findAllUnits() {
  return function (dispatch) {
    axios.get("http://localhost:3001/units").then((res) => {
      const units = res.data;
      dispatch(setUnits(units));
    });
  };
}

// POUR POST ET PUT => axios.put(URL, body).then...

export function createNewRecipe(recipe) {
  return function (dispatch) {
    axios.post("http://localhost:3001/recipes", recipe).then((res) => {
      const createdRecipe = res.data;

      dispatch(addRecipe(createdRecipe));
    });
  };
}

export function findOneRecipe(recipe_id) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/recipes/${recipe_id}`).then((res) => {
      const recipe = res.data;
      dispatch(addRecipe(recipe));
    });
  };
}

export function removeOneRecipe(recipe_id) {
  return function (dispatch) {
    axios.delete(`http://localhost:3001/recipes/${recipe_id}`).then((res) => {
      dispatch(removeRecipe(recipe_id));
    });
  };
}

export function updateOneRecipe(recipe) {
  return function (dispatch) {
    axios
      .put(`http://localhost:3001/recipes/${recipe.recipe_id}`, recipe)
      .then((res) => {
        dispatch(updateRecipe(recipe));
      });
  };
}
