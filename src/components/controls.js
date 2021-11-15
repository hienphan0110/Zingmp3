import React from "react";
import { FaRandom, FaRedo, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function Controls(props) {
  return (
    <div className="footer__center">
      <div className="control">
        <div className="btn">
          <FaRandom />
        </div>
        <div className="btn btn-skip" onClick={() => props.Skip(false)}>
          <FaArrowLeft />
        </div>
        <div
          className="btn btn-play"
          onClick={props.handlePlay}
          // onTimeUpdate={HandlePlay}
        >
          <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </div>
        <div className="btn btn-skip" onClick={() => props.Skip()}>
          <FaArrowRight />
        </div>
        <div className="btn">
          <FaRedo />
        </div>
      </div>
      <div className="progresss">
        <input
          id="progress"
          class="progress"
          type="range"
          // value="0"
          step="1"
          min="0"
          max="100"
          // onChange={onChange}
        />
      </div>
    </div>
  );
}