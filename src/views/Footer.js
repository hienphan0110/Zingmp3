import React, { useState } from "react";
import PlayerDetails from "../components/PlayerDetails";
import Controls from "../components/controls";
import { FaFilm, FaMicrophone } from "react-icons/fa";

export default function Footer(props) {
  const [percentage, setPercentage] = useState(0);

  const onChange = (e) => {
    setPercentage(e.target.value);
  };
  // const SkipSong = (forwards = true) => {
  //   if (forwards) {
  //     props.setCurrentSongIndex(() => {
  //       let temp = props.currentSongIndex;
  //       temp++;
  //       if (temp > props.songs.length - 1) {
  //         temp = 0;
  //       }
  //       return temp;
  //     });
  //   } else {
  //     props.setCurrentSongIndex(() => {
  //       let temp = props.currentSongIndex;
  //       temp--;

  //       if (temp < 0) {
  //         temp = props.songs.length - 1;
  //       }
  //       return temp;
  //     });
  //   }
  // };
  return (
    <div className="footer">
      <div className="player">
        <PlayerDetails
          // song={props.song}
          song={props.song}
          // setCurrentSongIndex={props.setCurrentSongIndex}
        />

        <Controls
          handlePlay={props.handlePlay}
          isPlaying={props.isPlaying}
          setIsPlaying={props.setIsPlaying}
          // SkipSong={SkipSong}
          Skip={props.Skip}
          onChange={onChange}
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
