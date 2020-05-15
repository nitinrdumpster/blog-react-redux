import jsonPlaceholder from "../apis/jsonPlaceholder";

// Use redux thunk to make async request
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
