import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  products: []
});

const productsSlice = createSlice({
  name: 'PRODUCTS',
  initialState,
  reducers: {
    UPDATE_PRODUCTS(state, action) {
      state.products = action.payload;
    } 
  }
})

export const { UPDATE_PRODUCTS } = productsSlice.actions;

export default productsSlice.reducer;