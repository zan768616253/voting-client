import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	getPair() {
		const pair = this.props.pair;
		return pair;
	},
	render: function() {
		return <div className="voting">
			{this.getPair().map(entry =>

				<button key={entry._id}
				        onClick = {() => this.props.vote(entry._id)}>
					<h1>{entry.content}</h1>
				</button>
			)}
		</div>
	}
});