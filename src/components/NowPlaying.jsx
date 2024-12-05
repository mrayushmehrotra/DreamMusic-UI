import React from "react";

const NowPlaying = () => {
  return (
    <div className="bg-black text-white p-4 rounded-md">
      <h2 className="text-lg font-bold mb-2">Now Playing</h2>
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/100" // Replace with real image URL
          alt="Song"
          className="w-16 h-16 rounded-md mr-4"
        />
        <div>
          <h3 className="font-bold">Beat It</h3>
          <p className="text-gray-400">Michael Jackson</p>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <button className="p-2 bg-gray-800 rounded-full">⏮</button>
        <button className="p-4 bg-red-500 rounded-full">⏯</button>
        <button className="p-2 bg-gray-800 rounded-full">⏭</button>
      </div>
    </div>
  );
};

export default NowPlaying;
