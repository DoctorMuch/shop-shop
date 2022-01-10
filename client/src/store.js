import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './utils/features/products/productsSlice';
import categoriesReducer from './utils/features/categories/categoriesSlice';
import cartsReducer from './utils/features/carts/cartsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    carts: cartsReducer
  }
});

export default store;