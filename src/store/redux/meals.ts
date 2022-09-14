import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
  name: "favorites",
  initialState: {
    meals: [],
    categories: [],
  },
  reducers: {},
});

export const addFavorite = mealsSlice.actions.addFavorite;
export const removeFavorite = mealsSlice.actions.removeFavorite;
export default mealsSlice.reducer;

const storeData = async (value) => {
  try {
    const todoState = JSON.stringify(value.ids);
    await AsyncStorage.setItem("@favorites_state", mealsSlice);
    console.log(mealsSlice);
  } catch (e) {
    console.log("saving error", e);
  }
};
