import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import Winner from './Winner.jsx';
import Vote from './Vote.jsx';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
	mixins: [PureRenderMixin],

	render: function() {
		console.log('component Voting winner: ' + JSON.toString(this.props.winner));
		return <div>
			{this.props.winner ?
				<Winner ref="winner" winner = {this.props.winner}/> : <Vote {...this.props}/>
			}
		</div>;
	}
});

function mapStateToProps(state) {
	console.log('voting props: ' + JSON.stringify(state));
	return {
		pair: state.get('pair'),
		hasVoted: state.get('hasVoted'),
		winner: state.get('winner')
	}
}

export const VotingContainer = connect(
	mapStateToProps,
	actionCreators
)(Voting);