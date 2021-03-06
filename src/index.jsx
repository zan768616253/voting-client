import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import reducers from './reducers';
import { setState } from './actions/socket/action_app';
import remoteActionMiddleware from './middlewares/remote_action_middleware';
import { generateSeedMiddleware } from './middlewares/authentication_middleware';

import { App } from './components/App';
import { ResultsContainer } from './components/result';
import { VotingContainer } from './components/vote';
import { SignupContainer } from './components/signup';
import { LandingContainer } from './components/landing';

import SocketHelper from './socket';

const io_address = `${location.protocol}//${location.hostname}:8090`;
const socket = io(io_address);

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket),
	generateSeedMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducers);

const socketHelper = new SocketHelper(socket, store);
socketHelper.init();

const routes= <Route path='/' component={App}>
	<Route path='results' component={ResultsContainer} />
	<Route path='votes' component={VotingContainer} />
	<Route path='signup' component={SignupContainer} />
	<Route path='landing' component={LandingContainer} />
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);