import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "../components/PlayerDetails";
import Controls from "../components/controls";
import { FaFilm, FaMicrophone } from "react-icons/fa";
import { connect } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

function Footer(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  });
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const onPlaying = () => {
    setCurrentTime(audioEl.current.currentTime);
    setSeekValue(
      (audioEl.current.currentTime / audioEl.current.duration) * 100
    );
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
  const handleLoadedData = () => {
    setDuration(audioEl.current.duration);
  };

  return (
    <div className="footer">
      <div className="player">
        <audio
          id="audio"
          src={props.songs[props.currentSongIndex].path}
          ref={audioEl}
          onTimeUpdate={onPlaying}
          onLoadedData={handleLoadedData}
        ></audio>
        <PlayerDetails
          isPlaying={isPlaying}
          song={props.songs[props.currentSongIndex]}
        />
        <Controls
          currentSongIndex={props.currentSongIndex}
          setCurrentSongIndex={props.setCurrentSongIndex}
          songs={props.songs}
          SkipSong={SkipSong}
          handlePlay={handlePlay}
          isPlaying={isPlaying}
          seekValue={seekValue}
          setSeekValue={setSeekValue}
          audioEl={audioEl}
          currentTime={currentTime}
          duration={duration}
        />
        <div className="footer__right">
          <FaFilm className="btn-film" />
          <FaMicrophone />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dataSongs: state.songs,
  };
};

export default connect(mapStateToProps)(Footer);
