import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ArtistDetails from "./components/ArtistDetails";
import SongTable from "./components/SongTable";
import NowPlaying from "./components/NowPlaying";

const App = () => {
  return (
    <div className="flex p-6 bg-gradient-to-b from-black to-gray-900 text-white h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ArtistDetails />
        <SongTable />
      </div>
      <div className="w-1/4 p-4">
        <NowPlaying />
      </div>
    </div>
  );
};

export default App;
