import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/redux/auth";
import { AuthStack } from "./AuthStack";
import Main from "./Main";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  console.log("USER", user);

  function onAuthStateChanged(user) {
    console.log("ON AUTH STATE CHANGED", user);
    dispatch(setUser(user));
    // if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>{user ? <Main /> : <AuthStack />}</NavigationContainer>
  );
};

export default Navigation;
