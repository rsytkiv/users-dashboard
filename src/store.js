import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from "./store/reducers/users"
import postsReducer from "./store/reducers/posts"
import thunk from "redux-thunk";

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
  });

const store = createStore(rootReducer, composeEnhancers(
applyMiddleware(thunk)
));
  
export default store;