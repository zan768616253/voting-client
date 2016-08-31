import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import Tagline from '../shared/tagline';
import { SignUpPanel } from './Signup-Component';
import * as userActions from '../../actions/user/action_user.js';

const SignUp = React.createClass({
	mixins: [PureRenderMixin],
	render() {
		const { state, actions } = this.props;

		return (
			<div className="signin-content">
				<div className='signin'>
					<Tagline />
					<SignUpPanel state={ state } actions={ actions }/>
				</div>
			</div>
		)
	}
});

function mapStateToProps(state) {
	const userReducer = state.userReducer;
	return {
		state: {
			userReducer: {
				handleUserSigninInput: userReducer.handleUserSigninInput
			}
		}
	}
};

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			userAction: {
				userCreate: bindActionCreators(userActions.userCreate, dispatch),
				userCreateValueChange: bindActionCreators(userActions.userCreateValueChange, dispatch)
			}
		}
	};
};

export const SignupContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);