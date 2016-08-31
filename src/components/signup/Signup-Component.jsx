import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const Signup = React.createClass({
	mixins: [PureRenderMixin],

	render () {
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
							<input id='USER_CREATE_NAME_CHANGE' placeholder='Name' onKeyUp={this.props.actions.userAction.userCreateValueChange} />
						</div>
						<div className='signin-panel-label-input signup'>
							<span>Email</span>
							{console.log(this.props)}
							<input type='email' id='USER_CREATE_EMAIL_CHANGE' placeholder='Email' onKeyUp={this.props.actions.userAction.userCreateValueChange} />
						</div>
						<div className='signin-panel-label-input signup'>
							<span>Password</span>
							<input id='USER_CREATE_PASSWORD_CHANGE' placeholder='Password' onKeyUp={this.props.actions.userAction.userCreateValueChange} />
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