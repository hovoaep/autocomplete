import { GET_USERS_SUCCESS, UPDATE_USER_NAME } from "../_constants";
import { getUsersRequest } from "../api";

export const getUserAction = dispatch => () => {
  getUsersRequest()
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: data
      });
    });
};

export const updateUserFilterName = dispatch => data => {
  dispatch({
    type: UPDATE_USER_NAME,
    payload: data
  });
};
