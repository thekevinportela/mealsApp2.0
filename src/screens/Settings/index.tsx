import { Button } from "native-base";
import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutFirebase } from "../../store/redux/auth";

export type ISettingsProps = {};

const Settings: React.FC<ISettingsProps> = ({}) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutFirebase());
  };
  return (
    <View>
      <Button onPress={logout}>LOGOUT</Button>
    </View>
  );
};

export { Settings };
