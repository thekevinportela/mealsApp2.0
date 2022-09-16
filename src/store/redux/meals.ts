import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from "@react-native-firebase/firestore";
import { utils } from "@react-native-firebase/app";
import storage from "@react-native-firebase/storage";

export const fetchMeals = createAsyncThunk(
  "fetchMealsByCat",
  async (categoryId, thunkApi) => {
    const userId = thunkApi.getState().auth.user;
    const userDocument = firestore()
      .collection("meals")
      .where("userId", "==", userId)
      .where("categoryId", "==", categoryId);
  }
);

export const addMeal = createAsyncThunk(
  "addMeal",
  async ({ title, image, duration, complexity, catName }, thunkApi) => {
    const userId = thunkApi.getState().auth.user;
    const reference = storage().ref(`/images/${userId}/meals/${title}`);
    console.log("add meal", title);

    if (image) {
      // uploads file
      await reference.putFile(image);
    }

    firestore()
      .collection("meals")
      .add({
        title,
        image,
        duration,
        complexity,
      })
      .then(() => {
        console.log("Meal added!");
        console.log(image);
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
  }
);

export const fetchCategories = createAsyncThunk(
  "fetchCats",
  async (action, thunkApi) => {
    const userId = thunkApi.getState().auth.user;

    try {
      const userDocuments = await firestore()
        .collection("categories")
        .where("userId", "==", userId)
        .orderBy("name", "asc")
        .get();
      const docs: any[] = [];
      userDocuments.forEach((doc) => {
        docs.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      return docs;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const addCategory = createAsyncThunk(
  "addCat",
  async ({ image, name }, thunkApi) => {
    const userId = thunkApi.getState().auth.user;
    const reference = storage().ref(`/images/${userId}/categories/${name}`);
    console.log("add category", image, name);

    if (image) {
      // uploads file
      await reference.putFile(image);
    }

    firestore()
      .collection("categories")
      .add({
        name: name,
        image,
        userId,
      })
      .then(() => {
        console.log("Category added!");
        console.log(image);
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
  }
);

export const editCategory = createAsyncThunk(
  "editCat",
  async ({ image, name, id }, thunkApi) => {
    const userId = thunkApi.getState().auth.user;
    const reference = storage().ref(`/images/${userId}/categories/${name}`);
    console.log("add category", image, name);

    if (image) {
      // uploads file
      await reference.putFile(image);
    }

    // firestore()
    //   .collection("categories")
    //   .add({
    //     name: name,
    //     image,
    //     userId,
    //   })
    //   .then(() => {
    //     console.log("Category added!");
    //     console.log(image);
    //   })
    //   .catch((e) => {
    //     console.log("ERROR", e);
    //   });

    firestore()
      .collection("categories")
      .doc(id)
      .update({
        name: name,
        image: image,
      })
      .then(() => {
        console.log("category updated!");
      })
      .catch((e) => console.log("Error", e));
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

export default mealsSlice.reducer;
