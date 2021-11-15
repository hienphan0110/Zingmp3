import React from "react";

export default function MusicItemView(props) {
  const songs = props.songs;
  return (
    <div className="music-view">
      <div className="music-view">
        {songs.map((song) => {
          return <div>{<li>{song.name}</li>}</div>;
        })}
      </div>
    </div>
  );
}
