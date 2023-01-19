import { createStore, combineReducers } from 'redux';
import markerReducer from './markerSlice';

const rootReducer = combineReducers({
    markers: markerReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
