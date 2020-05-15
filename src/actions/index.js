import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// Use redux thunk to make async request
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// To memoize a function, create a private function (_fetchUser in this case).
// Export the private memoized function. 
// Private function will take dispatch as an argument.
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
