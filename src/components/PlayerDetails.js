import React from "react";

function PlayerDetails(props) {
  return (
    <div className="details">
      <div className="details-img">
        <img src={props.song.image} alt="" />
      </div>
      <div className="details-title">
        <h3>{props.song.name}</h3>
        <p>{props.song.singer}</p>
      </div>
    </div>
  );
}

export default PlayerDetails;
