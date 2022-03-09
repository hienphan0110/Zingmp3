import { LIST_SONG, SONG_DETAIL } from "../constants/consts";
import axios from "axios";

export const listSongs = () => async (dispatch) => {
  try {
    const { data, status } = await axios({
      url: "https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1",
      method: "GET",
    });
    if (status === 200) {
      dispatch({
        type: LIST_SONG,
        listSong: data.data.song,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSongDetailAction =
  (newSong, typeSong = true) =>
  async (dispatch) => {
    try {
      const { data, status } = await axios({
        method: "GET",
        url: `https://mp3.zing.vn/xhr/media/get-source?type=audio&key=${newSong.code}`,
      });
      if (status === 200) {
        dispatch({
          type: SONG_DETAIL,
          songDetail: data.data,
          typeSong: typeSong,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
