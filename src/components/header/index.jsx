import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import { LoginPanel } from './Header-Component.jsx';

export default React.createClass({
	mixins: [PureRenderMixin],

	render() {
		return (
			<div className="head-box">
				<div className="header-content">
					<div className="header-content-rightside">
						<LoginPanel />
					</div>
					<div  className="header-content-leftside">
					</div>
				</div>
			</div>
		)
	}
})