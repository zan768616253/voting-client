import _ from 'lodash';
import { combineReducers } from 'redux';
import { Map } from 'immutable';

import * as action_constants from '../actions/action_constant';

function handleUserSignUpInput (state = Map({ email: '', name: '', password: '', confirmpassword: '', input_error: {email:'', password:'', name:''}}), action) {
	let error = state.get('input_error');
	const { type, value } = action;

	switch (type) {
		case action_constants.USER_CREATE_EMAIL_CHANGE:
			if (value.match(/^[^.]([\w\!\#\$\%\&\'\*\.\+\-\/\=\?\^\_\`\{\|\}\~]+)\@(\w+\.\w+)+?$/)) {
				delete error.email;
			} else {
				_.assign(error, { email: 'Email format not correct' });
			}
			return state.set('email', value).set('input_error', error);
			break;
		case action_constants.USER_CREATE_NAME_CHANGE:
			if (value.indexOf('@') > -1 || value.indexOf(',') > -1) {
				_.assign(error, { name: 'Name cannot content \'@\' and \',\'' });
			} else {
				delete error.name;
			}
			return state.set('name', value).set('input_error', error);
			break;
		case action_constants.USER_CREATE_PASSWORD_CHANGE:
			if (value.length < 8) {
				_.assign(error,{ password: 'Password must have at least 8 characters.' });
			} else {
				delete error.password;
			}
			return state.set('password', value).set('input_error', error);
			break;
	}
	return state;
}

function handleUserLogInInput (state = Map({ email: '', password: '', input_error: { email: '', password:'' }}), action) {
	let error = state.get('input_error');
	const { type, value } = action;

	switch (type) {
		case action_constants.USER_LOGIN_EMAIL_CHANGE:
			if (value.match(/^[^.]([\w\!\#\$\%\&\'\*\.\+\-\/\=\?\^\_\`\{\|\}\~]+)\@(\w+\.\w+)+?$/)) {
				delete error.email;
			} else {
				_.assign(error, { email: 'Email format not correct' });
			}
			return state.set('email', value).set('input_error', error);
			break;
		case action_constants.USER_LOGIN_PASSWORD_CHANGE:
			if (value.length > 0) {
				delete error.password;
			} else {
				_.assign(error,{ password: 'Password must have at least 1 characters.' });
			}
			return state.set('password', value).set('input_error', error);
			break;
	}
	return state;
}

export const userReducer = combineReducers({
	handleUserSignUpInput,
	handleUserLogInInput
})