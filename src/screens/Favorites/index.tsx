import { View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../../components/MealsList";
import { FavoritesContext } from "../../store/context/favorites-context";
import { MEALS } from "../../data/dummy-data";
import { Center, Text } from "native-base";
import { useSelector } from "react-redux";

const Favorites = () => {
  // const favContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoritedMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return favoritedMeals.length === 0 ? (
    <Center flex={1}>
      <Text fontSize={160}>🤔</Text>
      <Text fontSize={20} color={"white"} padding={12} textAlign={"center"}>
        To add a meal to your favorites click on a meal and tap on the heart
        icon!
      </Text>
    </Center>
  ) : (
    <MealsList items={favoritedMeals} />
  );
};

export default Favorites;
