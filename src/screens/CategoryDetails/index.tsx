import { Center, FlatList, Text } from "native-base";
import React, { useEffect } from "react";
import { MealGridTile } from "../../components/MealGridTile";
import MealsList from "../../components/MealsList";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import Navigation from "../../navigation";

const CategoryDetails = ({ route }) => {
  const { id } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  return <MealsList items={displayedMeals} />;
};

export { CategoryDetails };
