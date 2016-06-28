import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import App from './components/App.jsx';
import reducer from './reducer';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import {ResultsContainer} from './components/Results.jsx';
import {VotingContainer} from './components/Voting.jsx';

const io_address = `${location.protocol}//${location.hostname}:8090`;
const socket = io(io_address);

socket.on('state', state => {
	store.dispatch(setState(state));
});

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

const routes= <Route component={App}>
	<Route path="/results" component={ResultsContainer} />
	<Route path='/' component={VotingContainer} />
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);