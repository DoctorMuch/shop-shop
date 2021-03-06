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
      state.categories = action.payload;

    },
    UPDATE_CURRENT_CATEGORY(state, action) {
      state.currentCategory = action.payload;
    },
  }
})

export const { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } = categoriesSlice.actions;

export default categoriesSlice.reducer;