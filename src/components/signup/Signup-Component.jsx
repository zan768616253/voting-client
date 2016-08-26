import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

const Signup = React.createClass({
	mixins: [PureRenderMixin],

	render () {
		return (
		<Section>
			<div className='signup-panel'>
				<div className='signin-panel-item left'>

				</div>
				<div className='signin-panel-item right'>

				</div>
			</div>
		</Section>
		)
	}
})