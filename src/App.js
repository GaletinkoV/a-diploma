import React, { useEffect, useContext } from 'react';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { AuthContext } from './context/AuthContext';
import http from './utils/http';

const App = () => {
	const { isAuth, token, handleChangeAuthState } = useContext(AuthContext);

	useEffect(() => {
		if (token) {
			verifyUser();
		}
	}, []);

	const verifyUser = async () => {
		try {
			await http.get('/home');
			handleChangeAuthState(true, token);
		} catch (error) {
			handleChangeAuthState(false, null);
			console.log(error);
		}
	};

	return (
		<div className="app">
			<Header/>
			{isAuth ? <PrivateRoutes/> : <PublicRoutes/>}
			<Footer/>
		</div>
	);
};

export default App;
