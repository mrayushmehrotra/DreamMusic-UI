// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'; // Use the correct import
import songReducer from './reducer'; // Import your songReducer

const store = configureStore({
  reducer: {
    song: songReducer, // The reducer for the song state
  },
});

export default store;
