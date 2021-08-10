import * as actionTypes from '../actions/types';
import { updateObject } from "../../shared/utility";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

const fetchUsersStart = (state, action) => {
    return updateObject(state, {error: null, loading: true, users: []});
  };
  
  const fetchUsersSuccess = (state, action) => {
    return updateObject(state, {
      users: action.data,
      error: null,
      loading: false
    });
  };
  
  const fetchUsersFailed = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
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
      default:
        return state;
    }
  }
  
  export default reducer;
  