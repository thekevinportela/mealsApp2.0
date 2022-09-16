import { View, Text } from "react-native";
import React from "react";
import { Center, FlatList } from "native-base";
import { MealGridTile } from "./MealGridTile";
// import { MEALS } from "../data/dummy-data";

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => <MealGridTile item={itemData.item} />;

  return (
    <Center flex={1}>
      <FlatList
        contentContainerStyle={{ alignItems: "center" }}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </Center>
  );
};

export default MealsList;
