import React from "react";
import MealsList from "../../components/MealsList";
// import { MEALS } from "../../data/dummy-data";

const CategoryDetails = ({ route }) => {
  const { id } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  return <MealsList items={displayedMeals} />;
};

export { CategoryDetails };
