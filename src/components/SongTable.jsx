import React from "react";

const SongTable = () => {
  const songs = [
    {
      title: "Billie Jean",
      plays: "1,064,818,048",
      time: "4:53",
      album: "Thriller",
    },
    { title: "Beat It", plays: "643,786,645", time: "4:18", album: "Thriller" },
    {
      title: "Smooth Criminal",
      plays: "407,284,446",
      time: "4:17",
      album: "Bad",
    },
  ];

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Popular</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Playing</th>
            <th>Time</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index} className="hover:bg-gray-800">
              <td>{index + 1}</td>
              <td>{song.title}</td>
              <td>{song.plays}</td>
              <td>{song.time}</td>
              <td>{song.album}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
