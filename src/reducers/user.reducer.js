import {
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_START,
  UPDATE_USER_NAME
} from "../_constants";

const initialState = {
  users: [],
  isLoaded: false,
  error: false,
  filters: {
    name: ""
  }
};

export const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_START:
      return { ...state, isLoaded: false, users: [] };
    case GET_USERS_SUCCESS:
      return { ...state, isLoaded: true, users: payload, error: false };
    case GET_USERS_FAIL:
      return { ...state, isLoaded: true, users: [], error: true };
    case UPDATE_USER_NAME:
      return { ...state, filters: { ...state.filters, name: payload } };
    default:
      return state;
  }
};
