import React from 'react';
import { connect } from 'react-redux';

import Header from './header';

const MainComponent = React.createClass({

	componentDidMount() {

	},

	componentWillReceiveProps(nextProps) {
		console.log('MainComponent.componentWillReceiveProps');
		console.log(nextProps);

		const { appReducer: { handleLogin }} = nextProps;
		const isRedirect = handleLogin.get('redirect');
		if (isRedirect) {
			setTimeout(() => {
				location.href = '/#/votes';
			}, 300);
		}
	},

	render() {
		return (
			<div>
				<div className="head-box blur" />
				<Header />
				<section className="content-box">
					{ this.props.children }
				</section>
			</div>
		)
	}
});

function mapStateToProps(state) {
	return state;
};

export const App = connect(
	mapStateToProps
)(MainComponent);