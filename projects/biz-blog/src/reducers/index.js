import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

export default combineReducers({
   // placeHolderFunc: () => 'replace with real data'
   posts: postsReducer,
   user: userReducer
});