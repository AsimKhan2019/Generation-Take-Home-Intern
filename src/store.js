import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slice/favoritesSlice';

const store = configureStore({
  reducer: {
    favorites : favoritesReducer,
  },
});

export default store;