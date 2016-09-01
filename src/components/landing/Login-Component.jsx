import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Tagline from '../shared/tagline';
import * as userActions from '../../actions/user/action_user.js';

const LogIn = React.createClass({
	mixins: [PureRenderMixin],

	render () {
		const { state, actions } = this.props;

		return (
			<div className="signin-content">
				<div className='signin'>
					<Tagline />
					<SignInPanel state={ state } actions={ actions }/>
				</div>
			</div>
		)
	}
});

const SignInPanel = React.createClass({
	mixins: [PureRenderMixin],

	render () {
		const { state: { userReducer: { handleUserLogInInput } }, actions: { userAction } } = this.props;
		const input_error = handleUserLogInInput.get('input_error');

		const handleOnKeyPress = (e) => {
			const email = handleUserLogInInput.get('email');
			const password = handleUserLogInInput.get('password');

			if ( Object.keys(input_error).length === 0 && e.keyCode === 13 ) {
				userAction.userLogin.call(undefined, email, password);
			}
		}

		return (
			<section>
				<div className='signup-panel'>
					<span className='signin-panel-item left'>
					</span>
					<div className='signin-panel-item right'>
						<span className='signin-panel-title'>
							Sign in
						</span>
						<div className='signin-panel-label-input signup'>
							<span>Email</span>
							<input type='email' id='USER_LOGIN_EMAIL_CHANGE' placeholder='Email' onKeyUp={userAction.userLoginValueChange} onKeyDown={handleOnKeyPress} />
						</div>
						<div className='signin-panel-label-input signup'>
							<span>Password</span>
							<input id='USER_LOGIN_PASSWORD_CHANGE' placeholder='Password' onKeyUp={userAction.userLoginValueChange} onKeyDown={handleOnKeyPress} />
						</div>
						<div className='signin-panel-label-input signup'>
							<a className='signin-panel-label-input-button'>
								SIGNIN
							</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
});


function mapStateToProps(state) {
	const userReducer = state.userReducer;
	return {
		state: {
			userReducer: {
				handleUserLogInInput: userReducer.handleUserLogInInput
			}
		}
	}
};

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			userAction: {
				userLogin: bindActionCreators(userActions.userLogin, dispatch),
				userLoginValueChange: bindActionCreators(userActions.userLoginValueChange, dispatch)
			}
		}
	};
};

export const LoginContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LogIn);