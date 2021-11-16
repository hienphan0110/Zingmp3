import React from "react";
import { useSpring, animated } from "react-spring";

function PlayerDetails(props) {
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
  return (
    <div className="details">
      <div className="details-img">
        <animated.img
          src={props.song.image}
          className="aa"
          alt=""
          style={props.isPlaying ? spring : {}}
        ></animated.img>
      </div>
      <div className="details-title">
        <h3>{props.song.name}</h3>
        <p>{props.song.singer}</p>
      </div>
    </div>
  );
}

export default PlayerDetails;
