import * as actionTypes from "./types"
import axios from "../../axios-api";
import { getErrors } from "../../shared/utility";


const fetchUsersStart = (data) => {
    return {
      type: actionTypes.FETCH_USERS_START,
      data,
    }
  };
  
  const fetchUsersSuccess = (data) => {
    return {
      type: actionTypes.FETCH_USERS_SUCCESS,
      data,
    }
  }
  
  const fetchUsersFailed = (error) => {
    return {
      type: actionTypes.FETCH_USERS_FAIL,
      error
    };
  };
  
  export const getUsers = () => {
    return dispatch => {
      dispatch(fetchUsersStart());
      return axios.get(`users`)
        .then((response) => {
          return dispatch(fetchUsersSuccess(response.data));
        })
        .catch(err => {
          return dispatch(fetchUsersFailed(getErrors(err)));
        });
    }
  }