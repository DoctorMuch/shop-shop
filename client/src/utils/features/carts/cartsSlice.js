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
      state.cartOpen = true
      state.cart = [...state.cart, action.product]
    },
    ADD_MULTIPLE_TO_CART(state, action) {
      state.cart.push(action.products)
    },
    REMOVE_FROM_CART(state, action) {
      state.cart = state.cart.filter(product => {
        return product._id !== action._id;
      });            
    },
    UPDATE_CART_QUANTITY(state, action) {
      state.cartOpen = true;
      state.cart = state.cart.map(product => {
        if (action._id === product._id) {
          product.purchaseQuantity = action.purchaseQuantity
        }
        return product;
      });
    },
    CLEAR_CART(state, action) {
      state.cart = []
      state.cartOpen = false
    },
    TOGGLE_CART(state, action) {
      state.cartOpen = !state.cartOpen
    }
  }
});

export const { ADD_TO_CART, ADD_MULTIPLE_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART, TOGGLE_CART } = cartsSlice.actions;

export default cartsSlice.reducer;