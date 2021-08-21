import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const FETCHING_POSTS = "FETCHING_POST";
export const ERROR_POSTS = "ERROR_POST";

export const fetchBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: FETCHING_POSTS });
    let response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/posts`
    );
    dispatch({ type: GET_POSTS, payload: response.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: ERROR_POSTS });
  }
};
