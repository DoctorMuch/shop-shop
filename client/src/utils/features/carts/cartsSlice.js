import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
  cart: [],
  cartOpen: false
});

const cartsSlice = createSlice({
  name: 'CARTS',
  initialState,
  reducers: {
    ADD_TO_CART(state, action) {
      const {cart, cartOpen } = action.payload;
    },
    ADD_MULTIPLE_TO_CART(state, action) {
    },
    REMOVE_FROM_CART(state, action) {

    },
    UPDATE_CART_QUANTITY(state, action) {
      
    },
    CLEAR_CART(state, action) {

    },
    TOGGLE_CART(state, action) {

    }
  }
});

export const { ADD_TO_CART } = cartsSlice.actions;

export default cartsSlice.reducer;