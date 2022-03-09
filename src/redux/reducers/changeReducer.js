import { CHANGE_SONG } from "../constants/consts";

const initialState = {
  Modal: false,

  playList: [],
};

// bắt từng action type
function exampleReducers(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SONG:
      let newListPlaylist = [...state.listPlaylist];
      const index = newListPlaylist.findIndex(
        (item) => item.name === action.newPlaylist.oldName
      );
      if (index !== -1) {
        newListPlaylist[index].name = action.newPlaylist.newName;
      }
      console.log(newListPlaylist);
      state.listPlaylist = [...newListPlaylist];
      return { ...state, Modal: false };

    default:
      return state;
  }
}
export default exampleReducers;
