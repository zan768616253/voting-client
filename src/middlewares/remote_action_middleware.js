import cookie from 'react-cookie';
import cryptoJS from 'crypto-js';

export default socket => store => next => action => {
	console.log('in remote action middleware', action);
	const seed = cookie.load('seed');
	const fm_auth = cookie.load('fm_auth');
	if (action.meta && action.meta.remote && seed) {
		const token = [cryptoJS.enc.Base64.stringify(cryptoJS.enc.Utf8.parse(seed)), cryptoJS.enc.Base64.stringify(cryptoJS.enc.Utf8.parse(fm_auth ||'null'))].join('.');
		action.seed = seed;
		action.token = token;

		socket.emit('action', action);
	}
	return next(action);
}