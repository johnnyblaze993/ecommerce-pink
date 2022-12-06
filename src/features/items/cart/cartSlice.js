import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //add a quantity property to the item,
      //if it already exists, increase the quantity
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
    increaseQty(state, action) {
      //if item is in cart increase the quantity
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decreaseQty(state, action) {
      //dont let the quantity go below 1
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        return;
      }
      item.quantity--;
    },
  },
});

export const { addItem, removeItem, clearCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
