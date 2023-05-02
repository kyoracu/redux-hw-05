import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './reducers/books';

const rootReducer = combineReducers({
  booksReducer,
});

const store = configureStore({
    reducer: rootReducer,
})

export default store