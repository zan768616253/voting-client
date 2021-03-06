import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import validator from 'validator';

export default React.createClass({
	mixins: [PureRenderMixin],
	getPair() {
		const pair = this.props.pair;
		return pair;
	},
	render: function() {
		return <div className="voting">
			{this.getPair().map(entry =>
				<div className="votingItem" key={entry._id}>
					<div className="votingGallery photo-frame" onClick = {() => this.props.vote(entry._id)}>
						{ validator.isURL(entry.content) ? <img src={ entry.content } /> : <span>{ entry.content }</span> }
					</div>
				</div>
			)}
		</div>
	}
});