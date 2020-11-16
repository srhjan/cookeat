import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipes/reducer";

const store = configureStore({
  reducer: {
    recipes: recipesSlice,
  },
});

export default store;
