import {Map} from 'immutable';

function setState(state, newState) {
	console.log('newState: ' + JSON.stringify(newState));
	return state.merge(newState);
}

export default function (state = Map(), action) {
	console.log('reducer action type: ' + action.type);
	switch(action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
	}
	return state;
}