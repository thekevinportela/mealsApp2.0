import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/index";
import { CategoryDetails } from "../screens/CategoryDetails";
import { MealDetails } from "../screens/MealDetails";
import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "../screens/Favorites";
import { Button, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CreateMeal from "../screens/CreateMeal";
import ConfirmMeal from "../ConfirmMeal";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Main = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "#ddd",
        contentStyle: { backgroundColor: "#434343" },
        headerStyle: { backgroundColor: "#2c2c2c" },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeDrawer"
        component={HomeDrawer}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryDetails}
        options={
          (({ route }) => {
            const { title } = route.params;
            return { title };
          },
          {
            headerRight: () => (
              <Icon
                as={AntDesign}
                name="plus"
                color="#fff"
                size={6}
                onPress={() => navigation.navigate("CreateMeal")}
              />
            ),
          })
        }
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetails}
        options={({ route }) => {
          const { item } = route.params;
          return { title: item.title };
        }}
      />
      <Stack.Screen name="CreateMeal" component={CreateMeal} />
      <Stack.Screen name="ConfirmMeal" component={ConfirmMeal} />
    </Stack.Navigator>
  );
};

export default Main;

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "#ddd",
        // contentStyle: { backgroundColor: "#434343" },
        headerStyle: { backgroundColor: "#2c2c2c" },
        sceneContainerStyle: { backgroundColor: "#434343" },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};
