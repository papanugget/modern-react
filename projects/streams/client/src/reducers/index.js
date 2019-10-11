import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    // dummyReducer: () => 1234556
    auth: authReducer
});