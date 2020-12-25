import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipes/reducer";
import usersSlice from "./users/reducer";

const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    users: usersSlice,
  },
});

export default store;
