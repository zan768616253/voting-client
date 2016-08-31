import { setVotees } from '../actions/socket/action_app';

class SocketHelper {
	constructor(socket, store) {
		this.socket = socket;
		this.store = store;
	}

	init() {
		this.socket
			.on('votees', votees => {
				this.store.dispatch(setVotees(votees));
			})
	}
}

export default SocketHelper;