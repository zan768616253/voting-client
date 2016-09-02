import React from 'react';

import { Link }  from '../shared/link';

export const LoginPanel = () => {
	return (
		<div className="header-content-login">
			<Link to='/landing'>Log in</Link>
			<Link to='/signup'>Sign up</Link>
		</div>
	)
}