import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
    auth: authReducer,
  },
});
