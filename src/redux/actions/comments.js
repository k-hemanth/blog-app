import axios from "axios";

export const GET_COMMENTS = "GET_COMMENTS";
export const FETCHING_COMMENTS = "FETCHING_COMMENTS";
export const ERROR_COMMENTS = "ERROR_COMMENTS";
export const SET_PAGE_TITLE = "SET_PAGE_TITLE";

export const fetchComments = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCHING_COMMENTS });
    let response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/comments?postId=${id}`
    );
    dispatch({ type: GET_COMMENTS, payload: response.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: ERROR_COMMENTS });
  }
};
