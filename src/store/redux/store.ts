import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import favoritesReducer from "./favorites";
import mealsReducer from "./meals";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
    auth: authReducer,
    meals: mealsReducer,
  },
});
