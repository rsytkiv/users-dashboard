import * as actionTypes from "../actions/types";
import { updateObject } from "../../shared/utility";

const initialState = {
  posts: [],
  userPosts: [],
  error: null,
  loading: false,
};

const fetchPostsStart = (state, action) => {
  return updateObject(state, { error: null, loading: true, posts: [] });
};

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.data,
    error: null,
    loading: false,
  });
};

const fetchPostsFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchPostsByUserFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchPostsByUserStart = (state, action) => {
  return updateObject(state, { error: null, loading: true, userPosts: [] });
};

const fetchPostsByUserSuccess = (state, action) => {
  return updateObject(state, {
    userPosts: action.data,
    error: null,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_LIST_START:
      return fetchPostsStart(state, action);
    case actionTypes.FETCH_POSTS_LIST_SUCCESS:
      return fetchPostsSuccess(state, action);
    case actionTypes.FETCH_POSTS_LIST_FAIL:
      return fetchPostsFailed(state, action);
    case actionTypes.FETCH_POSTS_BY_USER_START:
      return fetchPostsByUserStart(state, action);
    case actionTypes.FETCH_POSTS_BY_USER_SUCCESS:
      return fetchPostsByUserSuccess(state, action);
    case actionTypes.FETCH_POSTS_BY_USER_FAIL:
      return fetchPostsByUserFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
