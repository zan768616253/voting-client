import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import Tagline from '../shared/tagline';
import { Signup } from './Signup-Component';
import * as userActions from '../../actions/action_user.js';

export const SignupContainer = React.createClass({
	mixins: [PureRenderMixin],

	render() {
		return (
			<div className="signin-content">
				<div className='signin'>
					<Tagline />
					<Signup />
				</div>
			</div>
		)
	}
})