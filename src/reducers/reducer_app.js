import { combineReducers } from 'redux';
import { Map } from 'immutable';

import * as action_constants from '../actions/action_constant';

function setState(state, newState) {
	console.log('newState: ' + JSON.stringify(newState));
	return state.merge(newState);
}

function handleSetState (state = Map(), action) {
	switch(action.type) {
		case 'SET_STATE':
			console.log('appReducer.handleSetState');
			return setState(state, action.state);
	}
	return state;
}

function handleLogin (state = Map().set('redirect', false), action) {
	const isRedirect = state.get('redirect');

	switch(action.type) {
		case action_constants.LOG_IN:
			console.log('appReducer.handleSetState');
			const { session: { email, key }} = action.state;
			const userInfo = {
				email: email
			};
			return setState(state, { userInfo: userInfo, session: key }).set('redirect', true);
		case action_constants.RESET_REDIRECT:
			return state.set('redirect', false);
	}
	return state;
}

export const appReducer = combineReducers({
	handleSetState,
	handleLogin
})