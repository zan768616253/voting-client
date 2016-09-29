import Cookie from "js.cookie";
import { setVotees, login, setLoginStatus } from '../actions/socket/action_app';

class SocketHelper {
	constructor(socket, store) {
		this.socket = socket;
		this.store = store;
	}

	init() {
		this.socket
			.on('VOTEES', votees => {
			})
			.on('LOGIN', data => {
				const session = data.session;
				const key = session.key;
				console.log('before SocketHelper set cookie mf_auth');
				console.log('session:');
				console.log(JSON.stringify(session));

				Cookie.set("mf_auth", key);
				this.store.dispatch(login(data));
			})
			.on('error', err => {
				console.log('err is received: ' + err);

				switch (err) {
					case 'Authentication error':
						this.store.dispatch(setLoginStatus(data));
						break;
				}
			})
	}
}

export default SocketHelper;