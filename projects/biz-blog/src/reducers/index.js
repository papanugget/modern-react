import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
   // placeHolderFunc: () => 'replace with real data' 
   posts: postsReducer
});