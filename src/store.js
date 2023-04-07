/*import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slice/favoritesSlice';

const store = configureStore({
  reducer: {
    favorites : favoritesReducer,
  },
});

export default store;*/

import { createStore } from 'redux';

const initialState = {
  markers: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MARKER':
      return {
        markers: [...state.markers, action.payload]
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
