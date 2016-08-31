import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import App from './components/App.jsx';
import reducers from './reducers';
import {setState} from './actions/action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import {ResultsContainer} from './components/result';
import {VotingContainer} from './components/vote';
import {SignupContainer} from './components/signup';

import SocketHelper from './sockets';

const io_address = `${location.protocol}//${location.hostname}:8090`;
const socket = io(io_address);

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducers);

const socketHelper = new SocketHelper(socket, store);
socketHelper.init();

const routes= <Route path='/' component={App}>
	<Route path='results' component={ResultsContainer} />
	<Route path='votes' component={VotingContainer} />
	<Route path='signup' component={SignupContainer} />
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);