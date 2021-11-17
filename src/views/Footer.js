import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "../components/PlayerDetails";
import Controls from "../components/controls";
import { FaFilm, FaMicrophone } from "react-icons/fa";

export default function Footer(props) {
  const [percentage, setPercentage] = useState(0);

  const onChange = () => {
    // setPercentage(e.target.value);
    if (audioEl.current.pause()) {
      console.log(Math.random());
    }
  };
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  });
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="footer">
      <div className="player">
        <audio id="audio" src={props.song.path} ref={audioEl}></audio>
        <PlayerDetails isPlaying={isPlaying} song={props.song} />

        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handlePlay={handlePlay}
          SkipSong={SkipSong}
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
