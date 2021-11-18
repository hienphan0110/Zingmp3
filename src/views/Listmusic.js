import React from "react";
import PlayerDetails from "../components/PlayerDetails";

export default function Listmusic(props) {
  return (
    <div className="listmusic">
      <div className="listmusic__tab">
        <span className="listmusic__tab-item active">Danh sách phát</span>
        <span className="listmusic__tab-item">Nghe gần đây</span>
      </div>
      <div className="listmusic__content">
        {props.songs.map((item) => {
          return (
            <div className={props.song === item ? "song active" : "song"}>
              <PlayerDetails song={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
