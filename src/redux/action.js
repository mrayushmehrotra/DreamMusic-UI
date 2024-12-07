// src/redux/actions.js

export const setCurrentSong = (song) => {
    return {
      type: "SET_CURRENT_SONG",
      payload: song,
    };
  };
  