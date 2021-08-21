import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const logger = () => (next) => (action) => {
  let result = next(action);
  return result;
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
