export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	};
}

export function vote(_id) {
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