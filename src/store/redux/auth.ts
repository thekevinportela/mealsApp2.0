import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import firestore from "@react-native-firebase/firestore";

// Define a type for the slice state
interface authState {
  user: FirebaseAuthTypes.User | undefined;
}

// Define the initial state using that type
const initialState: authState = {
  user: undefined,
};

export const loginWithEmailAndPass = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkApi
  ) => {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return response;
  }
);
export const logoutFirebase = createAsyncThunk(
  "auth/logout",
  async (thunkApi) => {
    const response = await auth().signOut();
    return response;
  }
);

export const signupWithEmailAndPass = createAsyncThunk(
  "auth/signup",
  async (
    { email, password }: { email: string; password: string },
    thunkApi
  ) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      console.log("FINISHED SIGNUP");
      await firestore().doc(`users/${response.user.uid}`).set({
        firstName: "test",
        lastName: "test",
      });

      console.log("CREATED USER");

      return response;
    } catch (error) {
      console.log("ERROR", error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(fetchUserById.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.entities.push(action.payload)
    // })
  },
});

export const { setUser } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer;
