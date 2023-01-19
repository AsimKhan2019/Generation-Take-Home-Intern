import { createSlice } from '@reduxjs/toolkit';

let nextMarkerId = 0;

const markerSlice = createSlice({
  name: 'markers',
  initialState: [],
  reducers: {
    setMarkers: (state, action) => {
      state.splice(0, state.length, ...action.payload);
    },
    setMarkerLocation: (state, action) => {
      const { marker, location } = action.payload;
      const index = state.findIndex(m => m === marker);
      state[index] = { ...marker, location };
    },
    addMarker: (state, action) => {
      state.push({ ...action.payload, id: nextMarkerId++ });
    },
    removeMarker: (state, action) => {
      const index = state.findIndex(marker => marker.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { setMarkers, setMarkerLocation, addMarker, removeMarker } = markerSlice.actions;

export default markerSlice.reducer;
