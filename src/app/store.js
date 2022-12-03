import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
