import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import PrivateHeader from './PrivateHeader';
import PublicHeader from './PublicHeader';

const Header = () => {
	const { isAuth } = useContext(AuthContext);

	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarTogglerDemo01"
				>
					{isAuth ? <PrivateHeader /> : <PublicHeader/> }
				</div>
			</div>
		</nav>
	);
};

export default Header;
