import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ArtistDetails from "./components/ArtistDetails";
import SongTable from "./components/SongTable";
import NowPlaying from "./components/NowPlaying";

const App = () => {
  return (
    <div className="flex overflow-hidden  p-6 bg-gradient-to-b from-black to-gray-900 text-white h-screen">
      <Sidebar />
      <div className="flex-1 bg-gradient-to-b from-[#520000] to-[#2C0000] h-screen flex flex-col">
        <Header />
        <ArtistDetails />
        <SongTable />
      </div>
      <div className="w-1/4 p-9 flex items-end">
        <NowPlaying />
      </div>
    </div>
  );
};

export default App;
