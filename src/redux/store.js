import thunk from "redux-thunk";
import songReducer from "./reducers/songReducer";
import changeReducer from "./reducers/changeReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  songReducer,
  changeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
