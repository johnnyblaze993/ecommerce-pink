import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import itemsReducer from "../features/items/itemSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
  },
});
