import cryptoJS from 'crypto-js';

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
	const seed = (Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
		(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
		(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
		(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
		(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER));

	return {
		meta: {remote: true},
		type: action_constants.USER_CREATE,
		value: {
			email: email,
			password: password,
			name: name,
			seed: seed.split(',')
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