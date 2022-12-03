import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {
  // actions
} = authSlice.actions;

export default authSlice.reducer;
