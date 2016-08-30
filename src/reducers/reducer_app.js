import { combineReducers } from 'redux';
import { Map } from 'immutable';

function setState(state, newState) {
	console.log('newState: ' + JSON.stringify(newState));
	return state.merge(newState);
}

function handleSetState (state = Map(), action) {
	console.log('reducer action type: ' + action.type);
	switch(action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
	}
	return state;
}

export const appReducer = combineReducers({
	handleSetState
})