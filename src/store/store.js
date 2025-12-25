import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Load cart from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) return undefined;
    return { cart: JSON.parse(serializedState) };
  } catch (err) {
    console.log("Could not load state", err);
    return undefined;
  }
};

// Save cart to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.log("Could not save state", err);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Save state on every change
store.subscribe(() => {
  saveState(store.getState());
});
