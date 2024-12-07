import React, { useState } from "react";
import { Reorder } from "framer-motion";
import NowPlaying from "./NowPlaying";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../redux/action";
const songs = [
  {
    id: "1",
    title: "Billie Jean",
    plays: "1,040,811,084",
    time: "4:53",
    audio:"https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
    album: "Thriller 25 Super Deluxe Edition",
    image: "https://i.scdn.co/image/ab67616d00001e029eb690cb054df293fe7711b8",
  },
  {
    id: "2",
    title: "Beat It",
    plays: "643,786,045",
    audio:"https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a",
    time: "4:18",
    album: "Thriller 25 Super Deluxe Edition",
    image: "https://i.ytimg.com/vi/USb2tN1Yq18/sddefault.jpg?v=5e777b79",
  },
  {
    id: "3",
    title: "Smooth Criminal - 2012 Remaster",
    audio:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-10.ogg",
    plays: "407,234,004",
    time: "4:17",
    album: "Bad 25th Anniversary Edition",
    image: "https://i.ytimg.com/vi/wkJTd_wKl0k/maxresdefault.jpg",
  },
  {
    id: "4",
    title: "Don't Stop 'Til You Get Enough",
    audio:"https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3",
    plays: "316,391,952",
    time: "6:05",
    album: "Off the Wall",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxDPpDZOBGGOYmQnfm_2ZbVSXYrmP8apkgw&s",
  },
  

 
];

const App = () => {
  const [playlist, setPlaylist] = useState(songs);
  const [currentSongId, setCurrentSongId] = useState(null);
  const dispatch = useDispatch(); 


  const handleSongClick = (e) => {
    setCurrentSongId(e.id);
    console.log(e)
    dispatch(setCurrentSong(e)); 
  };

  return (
    <div className="mt-14  ">
      <h2 className="text-2xl font-bold ">Popular</h2>
    <div className="bg-gradient-to-b from-[#3F00000] to-black font-semibold text-white p-12 ">

<div className="relative">


      {/* Header */}
      <div className="text-gray-400 flex justify-around border-b border-gray-600 pb-2">
        <p className="flex-1 ml-11">Title</p>
        <p className="w-32">Plays</p>
        <p className="w-20">Time</p>
        <p className="flex-1">Album</p>
      </div>

      {/* Scrollable List */}
      <div className="overflow-y-auto min-h-fit ">
        <Reorder.Group values={playlist} onReorder={setPlaylist}>
          {playlist.map((song, index) => (
            <Reorder.Item value={song} key={song.id}>
              <div
                className={`cursor-pointer flex items-center gap-x-4 py-3 px-2 ${
                  currentSongId === song.id ? "custom-highlight" : "hover:bg-red-500"
                }`}
                onClick={() => handleSongClick(song)}
              >
                <div className="w-10">

                {currentSongId === song.id && (
                  <img src="music.png" alt="Music icon" className="w-4 h-4 ml-1" />
                )}
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-10 h-10 rounded"
                  />
                  <span>{song.title}</span>
                </div>
                <p className="w-32">{song.plays}</p>
                <p className="w-20">{song.time}</p>
                <p className="flex-1">{song.album}</p>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      </div>
    </div>
    </div>
  );
};

export default App;
