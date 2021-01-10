import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const ActionContainer = styled.div`
	margin-left: auto;
`;

const PrivateHeader = () => (
	<>
		<Link
			to={ROUTES.HOME}
			className="navbar-brand"
		>My Diploma Project
		</Link>
		<ActionContainer className="d-flex">
			<Link to={ROUTES.HOME}>
				<button
					className="btn btn-outline-light"
				>Log in
				</button>
			</Link>
		</ActionContainer>
	</>
);

export default PrivateHeader;