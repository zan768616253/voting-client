import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	getPair() {
		const pair = this.props.pair;
		return pair;
	},
	_onLoad: function ()
	{
	},
	render: function() {
		return <div className="voting">
			{this.getPair().map(entry =>
				<div className="votingItem" >
					<div className="votingGallery" key={entry._id}
					     onClick = {() => this.props.vote(entry._id)}>
						<img src={entry.content} className={this.imageClass} onLoad={this._onLoad.bind(this)} />
					</div>
				</div>
			)}
		</div>
	}
});