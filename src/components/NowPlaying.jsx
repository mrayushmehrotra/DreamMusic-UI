import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import { useSelector } from "react-redux";
import { FaPause } from "react-icons/fa";

const NowPlaying = () => {
  const song = useSelector((state) => state.song.currentSong); // Get the current song from Redux state
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0); // Track current playback time
  const [duration, setDuration] = useState(0); // Track song duration

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (song) {
      const sound = new Howl({
        src: [song.audio],
        html5: true,
        onplay: () => {
          setIsPlaying(true);
          setDuration(Math.floor(sound.duration())); // Set duration when playback starts
        },
        onpause: () => setIsPlaying(false),
        onend: () => {
          setIsPlaying(false);
          setCurrentTime(0); // Reset time when song ends
        },
      });

      setAudio(sound);
      sound.play();

      // Cleanup Howler instance when the component unmounts
      return () => {
        sound.unload();
      };
    }
  }, [song]);

  useEffect(() => {
    let interval;
    if (audio && isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(Math.floor(audio.seek())); // Update current time every second
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup interval on unmount or when playback stops
  }, [audio, isPlaying]);

  // Format time in MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (!song) return null;

  return (
    <div className="bg-[#6B0000] text-white p-9 rounded-xl shadow-lg max-w-sm min-w-full  mx-auto">
      <h2 className="text-center text-xl font-semibold mb-4">Now Playing</h2>
      <img
        src={song.image}
        alt="Song"
        className="rounded-lg w-full h-40 object-cover mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg font-bold">{song.title}</h3>
        <p className="text-sm text-gray-200">{song.artist}</p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <img src="/Repeat.png" alt="Repeat " className="w-8 h-8" />
        <button className="text-2xl text-white hover:text-gray-400">
        <img src="/Back.png" alt="Back " className="w-8 h-8" />
          </button>
        <button
          className="text-4xl p-4 shadow-lg"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
           <FaPause  fill="white" className="text-white  text-4xl" />
          ) : (
            <img src="/Play.png" alt="Play" className="w-8 h-8" />
          )}
        </button>
        <button className="text-2xl text-white hover:text-gray-400">
        <img src="/Next.png" alt="Next " className="w-8 h-8" />
        </button>
        <img src="/Random.png" alt="Repeat " className="w-8 h-8" />
      </div>
      <div className="flex items-center justify-between text-xs text-gray-300 mt-4">
        <span>{formatTime(currentTime)}</span>
        <div className="flex-grow mx-4 h-1 bg-gray-500 rounded-full relative overflow-hidden">
          <div
            className="bg-white h-1 rounded-full"
            style={{
              width: `${(currentTime / duration) * 100 || 0}%`, // Dynamic progress bar
            }}
          ></div>
        </div>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default NowPlaying;
