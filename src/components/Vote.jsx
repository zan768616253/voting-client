import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	getPair() {
		return this.props.pair || [];
	},
	isDisabled() {
		return !!this.props.hasVoted;
	},
	hasVotedFor(entry) {
		return entry === this.props.hasVoted;
	},
	render: function() {
		console.log('component vote pair: ' + JSON.toString(this.props.pair));
		return <div className="voting">
			{this.getPair().map(entry =>
				<button key={entry}
				        disabled={this.isDisabled()}
				        onClick = {() => this.props.vote(entry)}>
					<h1>{entry}</h1>
					{this.hasVotedFor(entry) ?
						<div className="label">Voted</div> :
						null}
				</button>
			)}
		</div>
	}
});