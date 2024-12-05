import React from "react";

const ArtistDetails = () => {
  return (
    <div className="p-4 text-white">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150" // Replace with real image URL
          alt="Artist"
          className="rounded-lg w-48 h-48 mr-6"
        />
        <div>
          <h1 className="text-4xl font-bold">Michael Jackson</h1>
          <p className="text-gray-400">27,918,530 monthly listeners</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;