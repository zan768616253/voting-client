import cookie from 'react-cookie';

export const generateSeedMiddleware = store => next => action => {
	console.log('in generate seed middleware', action);
	let seed = cookie.load('seed');
	if (!seed) {
		seed = (Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
			(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
			(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
			(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
			(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER));
		cookie.save('seed', seed, { path: '/' });
	}
	return next(action);
}