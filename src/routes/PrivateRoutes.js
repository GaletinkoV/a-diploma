import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoutes = () => {
	return (
		<Switch>
			<Route exact path='/' component={() => <div>I am authorized</div>} />
			<Redirect to='/' />
		</Switch>
	);
};

export default React.memo(PrivateRoutes);
