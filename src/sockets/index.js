import { setState } from '../actions/action_creators';

class SocketHelper {
	constructor(socket, store) {
		this.socket = socket;
		this.store = store;
	}

	init() {
		this.socket
			.on('state', state => {
				console.log('socket.on state: ' + JSON.stringify(state));
				this.store.dispatch(setState(state));
			})
	}
}

export default SocketHelper;