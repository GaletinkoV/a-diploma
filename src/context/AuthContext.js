import React, { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext(null);

const AuthContextWrapper = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [token, setToken] = useState(localStorage.getItem('token'));

	const handleChangeAuthState = useCallback((newAuth, newToken) => {
		setIsAuth(newAuth);
		setToken(newToken)
	}, [setIsAuth, setToken]);

	return (
		<AuthContext.Provider value={{ isAuth, token, handleChangeAuthState }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextWrapper;
