import React, { useEffect } from "react";
import { getSongDetailAction } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

function PlayerDetails(props) {
  const { songDetail } = useSelector((state) => state.songReducer);
  const dispatch = useDispatch();
  const { item, index, listSong } = props;
  useEffect(() => {
    dispatch(getSongDetailAction());
  }, []);

  useEffect(() => {
    if (item.id === listSong[0].id) {
      dispatch(getSongDetailAction(listSong[0]));
    }
  }, []);
  return (
    <div
      className={item.id === songDetail.id ? "song active" : "song"}
      key={index}
      onClick={() => {
        dispatch(getSongDetailAction(item));
      }}
    >
      <div className="details">
        <div className="details-img">
          <img src={item.thumbnail} className="aa" alt=""></img>
        </div>
        <div className="details-title">
          <h3>{item.name}</h3>
          <p>{item.artists_names}</p>
        </div>
      </div>
    </div>
  );
}
export default PlayerDetails;
