import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { Login } from "../screens/Login";
import { Signup } from "../screens/Signup";

export type IAuthStackProps = {};

const Stack = createNativeStackNavigator();

const AuthStack = ({}: PropsWithChildren<IAuthStackProps>) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export { AuthStack };
