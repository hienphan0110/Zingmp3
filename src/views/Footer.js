import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "../components/PlayerDetails";
import Controls from "../components/controls";
import { FaFilm, FaMicrophone } from "react-icons/fa";

export default function Footer(props) {
  const [percentage, setPercentage] = useState(0);

  // const onChange = () => {
  //   // setPercentage(e.target.value);
  //   if (audioEl.current.pause()) {
  //     console.log(Math.random());
  //   }
  // };
  return (
    <div className="footer">
      <div className="player">
        <PlayerDetails
          isPlaying={props.isPlaying}
          song={props.songs[props.currentSongIndex]}
        />
        <Controls
          isPlaying={props.isPlaying}
          setIsPlaying={props.setIsPlaying}
          handlePlay={props.handlePlay}
          SkipSong={props.SkipSong}
          // onChange={onChange}
          percentage={percentage}
        />
        <div className="footer__right">
          <FaFilm className="btn-film" />
          <FaMicrophone />
        </div>
      </div>
    </div>
  );
}
