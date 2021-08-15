import * as actionTypes from "./types";
import axios from "../../axios-api";
import { getErrors } from "../../shared/utility";

const fetchPostsStart = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_LIST_START,
    data,
  };
};

const fetchPostsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_LIST_SUCCESS,
    data,
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: actionTypes.FETCH_POSTS_LIST_FAIL,
    error,
  };
};

export const getPostsList = () => {
  return (dispatch) => {
    dispatch(fetchPostsStart());
    return axios
      .get(`posts`)
      .then((response) => {
        return dispatch(fetchPostsSuccess(response.data));
      })
      .catch((err) => {
        return dispatch(fetchPostsFailed(getErrors(err)));
      });
  };
};

const fetchPostsByUserStart = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_BY_USER_START,
    data,
  };
};

const fetchPostsByUserSuccess = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_BY_USER_SUCCESS,
    data,
  };
};

const fetchPostsByUserFailed = (error) => {
  return {
    type: actionTypes.FETCH_POSTS_BY_USER_FAIL,
    error,
  };
};

export const getPostsByUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchPostsByUserStart());
    return axios
      .get(`posts/?userId=${userId}`)
      .then((response) => {
        return dispatch(fetchPostsByUserSuccess(response.data));
      })
      .catch((err) => {
        return dispatch(fetchPostsByUserFailed(getErrors(err)));
      });
  };
};
