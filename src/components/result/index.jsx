import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './../winner/index.jsx';
import * as actionCreators from '../../actions/action_creators';

export const Results = React.createClass({
	mixins: [PureRenderMixin],
	getPair: function() {
		return this.props.pair || [];
	},
	getVotes: function(entry) {
		if (this.props.tally && this.props.tally.has(entry)) {
			return this.props.tally.get(entry);
		}
		return 0;
	},
	render: function() {
		return this.props.winner ?
			<Winner ref="winner" winner={this.props.winner} /> :
			<div className="results">
				<div className="tally">
					{this.getPair().map(entry =>
							<div key={entry} className="entry">
								<h1>{entry}</h1>
								<div className="voteCount">
									{this.getVotes(entry)}
								</div>
							</div>
					)}
				</div>
				<div className="management">
					<button ref = 'next' className="next" onClick = {this.props.next}>
						NEXT
					</button>
				</div>
			</div>
	}
});

function mapStateToProps(state) {
	console.log('results props: ' + JSON.stringify(state));
	return {
		pair: state.get('pair'),
		winner: state.get('winner')
	}
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);

