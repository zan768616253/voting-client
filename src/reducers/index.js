import { combineReducers } from 'redux';
import { appReducer } from './reducer_app';
import { userReducer } from './reducer_user'

const rootReducer = combineReducers({
	appReducer,
	userReducer
});

export default rootReducer;