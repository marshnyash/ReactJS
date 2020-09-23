import { combineReducers } from "redux";

import moviesReducer from "./movie";

export default combineReducers({
  movies: moviesReducer,
});
