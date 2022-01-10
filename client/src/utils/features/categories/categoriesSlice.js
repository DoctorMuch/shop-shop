import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const categoriesAdapter = createEntityAdapter();

const initialState = categoriesAdapter.getInitialState({
  categories: [],
  currentCategory: ''
});

const categoriesSlice = createSlice({
  name: 'CATEGORIES',
  initialState,
  reducers: {
    UPDATE_CATEGORIES(state, action) {
      const categories = action.payload;
      state.entities = categories
    },
    UPDATE_CURRENT_CATEGORY(state, action) {
      const currentCategory = action.payload;
      state.entities = currentCategory
    },
  }
})

export const { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } = categoriesSlice.actions;

export default categoriesSlice.reducer;