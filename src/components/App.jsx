import React from 'react';

import Header from './Header.jsx';

export default React.createClass({
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		)
	}
});