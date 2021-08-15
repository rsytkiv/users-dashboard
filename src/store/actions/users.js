import * as actionTypes from "./types";
import axios from "../../axios-api";
import { getErrors } from "../../shared/utility";

const fetchUsersStart = (data) => {
  return {
    type: actionTypes.FETCH_USERS_START,
    data,
  };
};

const fetchUsersSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    data,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
    error,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersStart());
    return axios
      .get(`users`)
      .then((response) => {
        return dispatch(fetchUsersSuccess(response.data));
      })
      .catch((err) => {
        return dispatch(fetchUsersFailed(getErrors(err)));
      });
  };
};

const fetchUserByIdStart = (data) => {
  return {
    type: actionTypes.FETCH_USER_BY_ID_START,
    data,
  };
};

const fetchUserByIdSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USER_BY_ID_SUCCESS,
    data,
  };
};

const fetchUserByIdFailed = (error) => {
  return {
    type: actionTypes.FETCH_USER_BY_ID_FAIL,
    error,
  };
};

export const getUserById = (userId) => {
  return (dispatch) => {
    dispatch(fetchUserByIdStart());
    return axios
      .get(`users/${userId}`)
      .then((response) => {
        return dispatch(fetchUserByIdSuccess(response.data));
      })
      .catch((err) => {
        return dispatch(fetchUserByIdFailed(getErrors(err)));
      });
  };
};
