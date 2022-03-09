import React, { useEffect } from "react";
import PlayerDetails from "../components/PlayerDetails";
import { useDispatch, useSelector } from "react-redux";
import { listSongs } from "../redux/actions/action";

export default function Listmusic() {
  const { listSong } = useSelector((state) => state.songReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listSongs());
  }, [dispatch]);
  return (
    <div className="listmusic">
      <div className="listmusic__tab">
        <span className="listmusic__tab-item active">Danh sách phát</span>
        <span className="listmusic__tab-item">Nghe gần đây</span>
      </div>
      <div className="listmusic__content">
        {listSong.map((item, index) => {
          return (
            <PlayerDetails listSong={listSong} item={item} index={index} />
          );
        })}
      </div>
    </div>
  );
}
