import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import Tagline from '../shared/tagline';
import { Signup } from './Signup-Component';
import * as userActions from '../../actions/action_user.js';

const SigningUp = React.createClass({
	mixins: [PureRenderMixin],
	render() {
		const { states } = this.props;
		const { actions } = this.props;
		//const actions = {
		//	userCreateValueChange: this.props.userCreateValueChange
		//};
		return (
			<div className="signin-content">
				<div className='signin'>
					<Tagline />
					<Signup states={ states } actions={ actions }/>
				</div>
			</div>
		)
	}
});

function mapStateToProps(state) {
	const userReducer = state.userReducer;
	return {
		states: {
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
				userCreateValueChange: bindActionCreators(userActions.userCreateValueChange, dispatch)
			}
		}
	};
};

export const SignupContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SigningUp);