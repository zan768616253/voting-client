import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { LoginContainer } from './Login-Component';

export const LandingContainer = React.createClass({
	mixins: [PureRenderMixin],

	render() {
		const { user } = this.props;

		if (user) {
			return (
				<div>Not Ready</div>
			)
		} else {
			return (
				<LoginContainer {...this.props} />
			)
		}
	}
})