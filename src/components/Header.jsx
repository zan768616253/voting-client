import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export default React.createClass({
	mixins: [PureRenderMixin],

	render() {
		return (
			<div className="head-box blur">

			</div>
		)
	}
})