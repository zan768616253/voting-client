import * as action_constants from './../action_constant';

export function setVotees(state) {
	return {
		type: 'SET_STATE',
		state
	};
}

export function login(state) {
	return {
		type: action_constants.LOG_IN,
		state
	}
}