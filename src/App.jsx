import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ArtistDetails from "./components/ArtistDetails";
import SongTable from "./components/SongTable";
import NowPlaying from "./components/NowPlaying";

const App = () => {
  return (
    <div className="flex overflow-hidden  p-6 bg-[#220909] text-white h-screen">
      <Sidebar />
      <div className="flex-1 bg-[#430101]  h-screen flex flex-col">
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
