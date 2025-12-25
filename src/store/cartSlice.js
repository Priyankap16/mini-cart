import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // { id, title, price, image, quantity }
  },
  reducers: {
    addToCart: (state, action) => {
      const prod = action.payload;
      const existing = state.items.find((i) => i.id === prod.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...prod, quantity: 1 });
      }
    },
    incrementQty: (state, action) => {
      const id = action.payload;
      const it = state.items.find((i) => i.id === id);
      if (it) it.quantity += 1;
    },
    decrementQty: (state, action) => {
      const id = action.payload;
      const it = state.items.find((i) => i.id === id);
      if (it) {
        it.quantity -= 1;
        if (it.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQty,
  decrementQty,
} = cartSlice.actions;
export default cartSlice.reducer;
