import { LIST_SONG, SONG_DETAIL } from "../constants/consts";

const initialState = {
  listSong: [],
  songDetail: {},
  typeSong: true,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_SONG: {
      return {
        ...state,
        listSong: action.listSong,
      };
    }
    case SONG_DETAIL: {
      return {
        ...state,
        songDetail: action.songDetail,
        typeSong: action.typeSong,
      };
    }
    default:
      return state;
  }
};
