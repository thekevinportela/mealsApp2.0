import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from "@react-native-firebase/firestore";

export const fetchMeals = createAsyncThunk(
  "fetchMealsByCat",
  async (categoryId, thunkApi) => {
    const userDocument = firestore().collection("meals").doc("ABC");
  }
);

export const fetchCategories = createAsyncThunk(
  "fetchCats",
  async (action, thunkApi) => {
    const userId = thunkApi.getState().auth.user;

    const userDocuments = await firestore()
      .collection("categories")
      .where("userId", "==", userId)
      .get();
    const docs: any[] = [];
    userDocuments.forEach((doc) => {
      docs.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return docs;
  }
);

type State = {
  meals: any[];
  categories: any[];
};

const initialState: State = {
  meals: [],
  categories: [],
};

const mealsSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      // Add user to the state array
      state.categories = action.payload;
    });
  },
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
