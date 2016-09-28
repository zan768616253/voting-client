import * as action_constants from './../action_constant';

export function resetRedirect() {
	return {
		type: action_constants.RESET_REDIRECT
	};
}