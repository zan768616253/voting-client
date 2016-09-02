import * as action_constants from './../action_constant';

export function userCreateValueChange (evt) {
	return {
		type: evt.target.id,
		value: evt.target.value
	}
}

export function userLoginValueChange (evt) {
	return {
		type: evt.target.id,
		value: evt.target.value
	}
}

export function userCreate (email, password, name) {
	return {
		meta: {remote: true},
		type: action_constants.USER_CREATE,
		value: {
			email: email,
			password: password,
			name: name
		}
	};
}

export function userLogin (email, password) {
	return {
		meta: {remote: true},
		type: action_constants.USER_LOGIN,
		value: {
			email: email,
			password: password
		}
	}
}