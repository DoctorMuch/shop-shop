import { combineReducers } from 'redux';

import productsReducer from './features/products/productsSlice';
import categoriesReducer from './features/categories/categoriesSlice';
import cartsReducer from './features/carts/cartsSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  carts: cartsReducer
})

export default rootReducer;
