import {
  Box,
  Center,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
} from "native-base";
import React, { useContext, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FavoritesContext } from "../../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/redux/favorites";

export type IMealDetailsProps = {};

const MealDetails: React.FC<IMealDetailsProps> = ({ route }) => {
  // const favContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const { item } = route.params;

  const navigation = useNavigation();
  // const mealIsFavorited = favContext.ids.includes(item.id);
  const mealIsFavorited = favoriteMealIds.includes(item.id);
  const [pressed, setPressed] = useState(false);
  // const handleHeart = () => {
  //   if (mealIsFavorited) {
  //     favContext.removeFavorite(item.id);
  //   } else {
  //     favContext.addFavorite(item.id);
  //   }
  // };
  const handleHeart = () => {
    if (mealIsFavorited) {
      // favContext.removeFavorite(item.id);
      dispatch(removeFavorite({ id: item.id }));
    } else {
      // favContext.addFavorite(item.id);
      dispatch(addFavorite({ id: item.id }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <AntDesign
            onPress={handleHeart}
            name={mealIsFavorited ? "heart" : "hearto"}
            size={24}
            color="white"
          />
        );
      },
    });
  }, [navigation, handleHeart]);

  return (
    <Box flex={1}>
      <Image
        position={"absolute"}
        src={item.imageUrl}
        width={"full"}
        height={300}
        alt={"Meal Image"}
      />
      <Box
        position={"absolute"}
        width={"full"}
        height={300}
        bg={{
          linearGradient: {
            colors: ["transparent", "#43434310", "#434343"],
            start: [0, 0],
            end: [0, 1],
          },
        }}
      ></Box>
      <ScrollView>
        <Box
          zIndex={10}
          width={"full"}
          height={300}
          bg={{
            linearGradient: {
              colors: ["transparent", "#43434310", "#434343"],
              start: [0, 0],
              end: [0, 1],
            },
          }}
        ></Box>
        <Box pb={20} bg={"#434343"}>
          <Box>
            <Text
              alignSelf={"center"}
              color={"#ccc"}
              paddingBottom={1}
              padding={1}
            >
              {item.duration} min | {item.complexity} | {item.affordability}
            </Text>
            <Text pt={5} alignSelf={"center"} fontSize={20} color={"white"}>
              Ingredients
            </Text>
            <Box
              alignSelf={"center"}
              borderRadius={"full"}
              bg={"white"}
              h={"1px"}
              w={10}
              margin={2}
            ></Box>
            {item.ingredients.map((ingredient: string, index: number) => {
              return <IngredientList ingredient={ingredient} index={index} />;
            })}
          </Box>
          <Box>
            <Text pt={5} alignSelf={"center"} fontSize={20} color={"white"}>
              Steps
            </Text>
            <Box
              alignSelf={"center"}
              borderRadius={"full"}
              bg={"white"}
              h={"1px"}
              w={10}
              margin={2}
            ></Box>
            {item.steps.map((ingredient: string, index: number) => {
              return <StepList ingredient={ingredient} index={index} />;
            })}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export { MealDetails };

const IngredientList = ({ ingredient, index }) => {
  return (
    <HStack ml={2}>
      <Entypo name="chevron-right" size={20} color="white" />
      <Text color={"white"} key={index}>
        {ingredient}
      </Text>
    </HStack>
  );
};
const StepList = ({ ingredient, index }) => {
  return (
    <HStack pl={4} pr={10} my={1}>
      <Text color={"white"}>{index + 1}. </Text>
      <Text color={"white"} key={index}>
        {ingredient}
      </Text>
    </HStack>
  );
};
