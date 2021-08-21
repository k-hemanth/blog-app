import { combineReducers } from "redux";

import comments from "./comments";
import posts from "./posts";

const reducer = combineReducers({
  posts,
  comments,
});

export default reducer;
