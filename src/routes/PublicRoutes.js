import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from "../pages/login/LoginPage";

const PublicRoutes = () => {
	return (
		<Switch>
			<Route path='/' component={LoginPage} />
			<Redirect to='/' />
		</Switch>
	);
};

export default PublicRoutes;
