import { createSlice } from "@reduxjs/toolkit";
import { uniqBy, filter } from "lodash";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    list: [],
    availableUnits: [],
  },
  reducers: {
    setRecipes(state, action) {
      state.list = action.payload;
    },
    setUnits(state, action) {
      state.availableUnits = action.payload;
    },
    addRecipe(state, action) {
      state.list = uniqBy([...state.list, action.payload], "recipe_id");
    },
    removeRecipe(state, action) {
      state.list = filter(
        state.list,
        (recipe) => recipe.recipe_id !== action.payload
      );
    },
    updateRecipe(state, action) {
      state.list = state.list.map((recipe) => {
        return recipe.recipe_id === action.payload.recipe_id
          ? action.payload
          : recipe;
      });
    },
  },
});

// Extract the action creators object and the reducer

const actions = recipesSlice.actions;
const reducer = recipesSlice.reducer;

// Extract and export each action creator by name

export const {
  setRecipes,
  setUnits,
  addRecipe,
  removeRecipe,
  updateRecipe,
} = actions;

//Export the reducer, either as a default or named export

export default reducer;
