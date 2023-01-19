import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers : {
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload]
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducers;