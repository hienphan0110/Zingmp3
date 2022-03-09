import React, { useState, useEffect, useRef } from "react";
import { FaFilm, FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getSongDetailAction } from "../redux/actions/action";
import { useSpring, animated } from "react-spring";
import { FaRandom, FaRedo, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function Footer() {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [duration, setDuration] = useState(0);
  let { listSong, songDetail, typeSong } = useSelector(
    (state) => state.songReducer
  );
  const dispatch = useDispatch();

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
  const handleLoadedData = () => {
    setDuration(audioEl.current.duration);
  };
  const spring = useSpring({
    loop: true,
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
    config: {
      duration: 3500,
    },
  });
  useEffect(() => {
    if (songDetail.source !== undefined) {
      updateSong(`https${songDetail.source["128"]?.slice(5)}`);
      audioEl.current.play();
    }
  }, [songDetail]);
  const updateSong = (source) => {
    setAudio({
      source,
      play: true,
    });
  };
  const [audio, setAudio] = useState({
    source: "",
    play: true,
  });
  const changeSong = (thamSo, list = listSong) => {
    const baiHatCuoiCung = list[list.length - 1];
    const index = list.findIndex((item) => item.id === songDetail.id);
    let baiHatHienTai = {};
    if (index !== -1) {
      if (thamSo === 1) {
        if (list[index].id === baiHatCuoiCung.id) {
          console.log("Day la bai cuoi cung");
          return;
        } else {
          baiHatHienTai = list[index + thamSo];
        }
      } else if (thamSo === -1) {
        if (index === 0) {
          console.log("Day la bai dau tien");
          return;
        } else {
          baiHatHienTai = list[index + thamSo];
        }
      } else {
        return;
      }
    }
    dispatch(getSongDetailAction(baiHatHienTai, typeSong));
  };
  return (
    <div className="footer">
      <div className="player">
        <div></div>
        <audio
          id="audio"
          src={audio.source}
          ref={audioEl}
          onTimeUpdate={onPlaying}
          onLoadedData={handleLoadedData}
        ></audio>
        <div className="details">
          <div className="details-img">
            <animated.img
              src={songDetail?.thumbnail}
              className="aa"
              style={isPlaying ? spring : {}}
            ></animated.img>
          </div>
          <div className="details-title">
            <h3>{songDetail?.name}</h3>
            <p>{songDetail?.artists_names}</p>
          </div>
        </div>
        <div className="footer__center">
          <div className="control">
            <div className="btn">
              <FaRandom />
            </div>
            <div className="btn btn-skip" onClick={() => changeSong(-1)}>
              <FaArrowLeft />
            </div>
            <div className="btn btn-play" onClick={handlePlay}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </div>
            <div
              className="btn btn-skip"
              onClick={() => {
                changeSong(1);
              }}
            >
              <FaArrowRight />
            </div>
            <div className="btn">
              <FaRedo />
            </div>
          </div>
          <div className="progresss">
            <span>{moment.utc(currentTime * 1000).format("mm:ss")}</span>
            <input
              id="progress"
              className="progress"
              type="range"
              value={seekValue || 0}
              step="1"
              min="0"
              max="100"
              onChange={(e) => {
                const seekto =
                  audioEl.current.duration * (+e.target.value / 100);
                audioEl.current.currentTime = seekto;
                setSeekValue(e.target.value);
              }}
            />
            <span>{moment.utc(duration * 1000).format("mm:ss")}</span>
          </div>
        </div>
        <div className="footer__right">
          <FaFilm className="btn-film" />
          <FaMicrophone />
        </div>
      </div>
    </div>
  );
}
export default Footer;
