// src/redux/reducer.js

const initialState = {
  currentSong: null, // The state for the currently playing song
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SONG':
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
