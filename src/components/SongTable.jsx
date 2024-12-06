import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SongTable = () => {
  const [songs, setSongs] = useState([
    {
      id: "1",
      title: "Billie Jean",
      plays: "1,040,811,084",
      time: "4:53",
      album: "Thriller 25 Super Deluxe Edition",
      image: "billie-jean.png",
    },
    {
      id: "2",
      title: "Beat It",
      plays: "643,786,045",
      time: "4:18",
      album: "Thriller 25 Super Deluxe Edition",
      image: "beat-it.png",
    },
    {
      id: "3",
      title: "Smooth Criminal - 2012 Remaster",
      plays: "407,234,004",
      time: "4:17",
      album: "Bad 25th Anniversary Edition",
      image: "smooth-criminal.png",
    },
    {
      id: "4",
      title: "Don't Stop 'Til You Get Enough",
      plays: "316,391,952",
      time: "6:05",
      album: "Off the Wall",
      image: "dont-stop.png",
    },
    {
      id: "5",
      title: "Rock With You - Single Version",
      plays: "268,187,218",
      time: "3:40",
      album: "Off the Wall",
      image: "rock-with-you.png",
    },
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside the list, do nothing
    if (!destination) return;

    // Reorder the list
    const reorderedSongs = Array.from(songs);
    const [movedSong] = reorderedSongs.splice(source.index, 1);
    reorderedSongs.splice(destination.index, 0, movedSong);

    setSongs(reorderedSongs);
  };

  return (
    <div className="p-12 text-white">
      <h2 className="text-2xl font-bold mb-4">Popular</h2>
      <div className="overflow-y-auto max-h-96 border border-gray-700 rounded-md">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="songs">
            {(provided) => (
              <table
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full text-left border-collapse"
              >
                <thead className="border-b border-gray-700">
                  <tr>
                    <th className="py-2">#</th>
                    <th></th>
                    <th>Title</th>
                    <th>Playing</th>
                    <th>Time</th>
                    <th>Album</th>
                  </tr>
                </thead>
                <tbody>
                  {songs.map((song, index) => (
                    <Draggable
                      key={song.id}
                      draggableId={song.id}
                      index={index}
                    >
                      {(provided) => (
                        <tr
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="cursor-pointer hover:bg-gray-800"
                        >
                          <td className="py-2 px-2">{index + 1}</td>
                          <td className="py-2 px-2 h-10 w-10">
                            <img
                              src={song.image}
                              alt={song.title}
                              className="h-8 w-8"
                            />
                          </td>
                          <td className="py-2 px-2">{song.title}</td>
                          <td className="py-2 px-2">{song.plays}</td>
                          <td className="py-2 px-2">{song.time}</td>
                          <td className="py-2 px-2">{song.album}</td>
                        </tr>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </tbody>
              </table>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default SongTable;
