import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import Winner from './Winner.jsx';
import Vote from './Vote.jsx';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
	mixins: [PureRenderMixin],

	render: function() {
		return <div>
			{this.props.winner ?
				<Winner ref="winner" winner = {this.props.winner}/> : <Vote pair={this.props.pair} vote={this.props.vote}/>
			}
		</div>;
	}
});

function mapStateToProps(state) {
	console.log('voting props: ' + JSON.stringify(state.toJS()));
	return {
		pair: state.get('pair') ? state.get('pair').toJS() : [],
		winner: state.get('winner') ? state.get('winner').toJS() : ''
	}
}

export const VotingContainer = connect(
	mapStateToProps,
	actionCreators
)(Voting);