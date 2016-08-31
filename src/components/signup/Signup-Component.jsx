import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const SignUpPanel = React.createClass({
	mixins: [PureRenderMixin],

	render () {
		const { state: { userReducer: { handleUserSigninInput } }, actions: { userAction } } = this.props;
		const input_error = handleUserSigninInput.get('input_error');

		const handleOnKeyPress = (e) => {
			if ( Object.keys(input_error).length === 0 && e.keyCode === 13 ) {
				userAction.userCreate.call(undefined, handleUserSigninInput.get('email'), handleUserSigninInput.get('password'))();
			}
		}

		return (
			<section>
				<div className='signup-panel'>
					<span className='signin-panel-item left'>

					</span>
					<div className='signin-panel-item right'>
						<span className='signin-panel-title'>
							Sign up
						</span>
						<div className='signin-panel-label-input signup'>
							<span>Full Name</span>
							<input id='USER_CREATE_NAME_CHANGE' placeholder='Name' onKeyUp={userAction.userCreateValueChange}  onKeyDown={handleOnKeyPress} />
						</div>
						<div className='signin-panel-label-input signup'>
							<span>Email</span>
							{console.log(this.props)}
							<input type='email' id='USER_CREATE_EMAIL_CHANGE' placeholder='Email' onKeyUp={userAction.userCreateValueChange} onKeyDown={handleOnKeyPress} />
						</div>
						<div className='signin-panel-label-input signup'>
							<span>Password</span>
							<input id='USER_CREATE_PASSWORD_CHANGE' placeholder='Password' onKeyUp={userAction.userCreateValueChange} onKeyDown={handleOnKeyPress} />
						</div>
						<div className='signin-panel-label-input signup'>
							<a className='signin-panel-label-input-button'>
								SIGNUP
							</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
})