import React from 'react';

import Header from './header';

export default React.createClass({
	render() {
		return (
			<div>
				<div className="head-box blur" />
				<Header />
				{this.props.children}
			</div>
		)
	}
});