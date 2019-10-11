import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer }  from 'redux-form';

export default combineReducers({
    // dummyReducer: () => 1234556
    auth: authReducer,
    form: formReducer
});