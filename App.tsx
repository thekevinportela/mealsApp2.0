import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import FavoritesContextProvider from "./src/store/context/favorites-context";
import { store } from "./src/store/redux/store";

const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <FavoritesContextProvider>
          <NativeBaseProvider config={config}>
            <StatusBar style="auto" />
            <Navigation />
          </NativeBaseProvider>
        </FavoritesContextProvider>
      </Provider>
    </>
  );
}
