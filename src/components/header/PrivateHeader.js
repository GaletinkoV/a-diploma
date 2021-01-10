import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const PrivateHeader = () => (
	<>
		<Link
			to={ROUTES.HOME}
			className="navbar-brand"
		>My Diploma Project
		</Link>
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item">
				<Link
					className="nav-link active"
					to={ROUTES.HOME}
				>Home</Link>
			</li>
			<li className="nav-item">
				<Link
					className="nav-link"
					to={ROUTES.USER_EVENTS}
				>My events</Link>
			</li>
			<li className="nav-item">
				<Link
					className="nav-link"
					to={ROUTES.CREATE_EVENT}
				>Create event</Link>
			</li>
		</ul>
		<div className="d-flex">
			<button
				className="btn btn-outline-light"
				type="submit"
			>Log out
			</button>
		</div>
	</>
);

export default PrivateHeader;