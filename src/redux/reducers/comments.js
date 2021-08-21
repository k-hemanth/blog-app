import {
  GET_COMMENTS,
  FETCHING_COMMENTS,
  ERROR_COMMENTS,
  SET_PAGE_TITLE,
} from "../actions/comments";

const initialState = {
  data: [],
  pageTitle: "",
  isFetching: false,
};

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_COMMENTS:
      return {
        ...state,
        isFetching: true,
      };
    case GET_COMMENTS:
      return {
        ...state,
        data: payload,
        isFetching: false,
      };
    case ERROR_COMMENTS:
      return {
        ...state,
        data: [],
        isFetching: false,
      };
    case SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: payload,
      };
    default:
      return state;
  }
};

export default posts;
