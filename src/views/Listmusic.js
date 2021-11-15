import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "../components/PlayerDetails";

export default function Listmusic(props) {
  // const handlell = (e) => {
  //   if (e.target.closest(".song:not(.active)")) {
  //   }
  // };

  // const [songActive, setSongActive] = useState(false);
  // let classes = "song";
  // if (songActive) {
  //   classes += " active";
  // }
  // console.log(props.setSong);
  // const [song, setSong] = useState(props.songs[props.currentSongIndex]);
  // console.log(song);
  return (
    <div className="listmusic">
      <div className="listmusic__tab">
        <span className="listmusic__tab-item active">Danh sách phát</span>
        <span className="listmusic__tab-item">Nghe gần đây</span>
      </div>
      <div className="listmusic__content">
        {props.songs.map((item) => {
          return (
            <div
              className={props.song === item ? "song active" : "song"}
              onClick={() => props.setSong(item)}
            >
              <PlayerDetails song={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
