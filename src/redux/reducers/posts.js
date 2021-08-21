import { GET_POSTS, FETCHING_POSTS, ERROR_POSTS } from "../actions/posts";

const initialState = {
  data: [],
  isFetching: false,
};

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_POSTS:
      return {
        ...state,
        isFetching: true,
      };
    case GET_POSTS:
      return {
        ...state,
        data: payload,
        isFetching: false,
      };
    case ERROR_POSTS:
      return {
        ...state,
        data: [],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default posts;
