import * as actionTypes from "../actions/types";
import { updateObject } from "../../shared/utility";

const initialState = {
  users: [],
  user: null,
  error: null,
  loading: false,
};

const fetchUsersStart = (state, action) => {
  return updateObject(state, { error: null, loading: true, users: [] });
};

const fetchUsersSuccess = (state, action) => {
  return updateObject(state, {
    users: action.data,
    error: null,
    loading: false,
  });
};

const fetchUsersFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchUserByIdStart = (state, action) => {
  return updateObject(state, { error: null, loading: true, user: null });
};

const fetchUserByIdSuccess = (state, action) => {
  return updateObject(state, {
    user: action.data,
    error: null,
    loading: false,
  });
};

const fetchUserByIdFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_START:
      return fetchUsersStart(state, action);
    case actionTypes.FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action);
    case actionTypes.FETCH_USERS_FAIL:
      return fetchUsersFailed(state, action);
    case actionTypes.FETCH_USER_BY_ID_START:
      return fetchUserByIdStart(state, action);
    case actionTypes.FETCH_USER_BY_ID_SUCCESS:
      return fetchUserByIdSuccess(state, action);
    case actionTypes.FETCH_USER_BY_ID_FAIL:
      return fetchUserByIdFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
