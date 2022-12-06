import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemSlice";
import cartReducer from "../features/items/cart/cartSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
  },
});
