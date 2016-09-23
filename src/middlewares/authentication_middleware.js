import Cookie from "js.cookie";

export const generateSeedMiddleware = store => next => action => {
	console.log('in generate seed middleware', action);
	let seed = Cookie.get("seed");
	if (!seed) {
		const newSeed = (Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
			(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
			(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
			(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)) + ',' +
			(Math.floor(Math.random()*2)?Math.floor(Math.random()*Number.MIN_SAFE_INTEGER):Math.floor(Math.random()*Number.MAX_SAFE_INTEGER));
		Cookie.set("seed", newSeed);
		console.log(Cookie.get("seed"));
	}
	return next(action);
}