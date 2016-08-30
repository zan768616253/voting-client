export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	};
}

export function vote(_id) {
	console.log('action_creators vote _id: %s', _id);
	return {
		meta: {remote: true},
		type: 'VOTE',
		id: _id
	};
}

export function next() {
	return {
		meta: {remote: true},
		type: 'NEXT'
	};
}