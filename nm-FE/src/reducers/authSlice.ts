import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "loginCheck",
  initialState: {
    isUserLoggedIn: false,
  },
  reducers: {
    setIsUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsUserLoggedIn } = authSlice.actions;

export const authReducer = authSlice.reducer;
