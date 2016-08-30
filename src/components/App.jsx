import React from 'react';

import Header from './header';

export default React.createClass({
	render() {
		return (
			<div>
				<div className="head-box blur" />
				<Header />
				<section className="content-box">
					{this.props.children}
				</section>
			</div>
		)
	}
});