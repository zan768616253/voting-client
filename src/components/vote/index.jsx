import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import Winner from '../winner/index.jsx';
import Vote from './Vote.jsx';
import * as actionCreators from '../../actions/socket/action_app';

export const Voting = React.createClass({
	mixins: [PureRenderMixin],

	render: function() {
		return (
			<div className='content'>
				{this.props.winner ?
					<Winner ref="winner" winner = {this.props.winner}/> : <Vote pair={this.props.pair} vote={this.props.vote}/>
				}
			</div>
		);
	}
});

function mapStateToProps(state) {
	const appReducer = state.appReducer;

	return {
		pair: appReducer.handleSetState.get('pair') ? appReducer.handleSetState.get('pair').toJS() : [],
		winner: appReducer.handleSetState.get('winner') ? appReducer.handleSetState.get('winner').toJS() : ''
	}
}

export const VotingContainer = connect(
	mapStateToProps,
	actionCreators
)(Voting);