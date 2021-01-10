import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import AuthContextWrapper from './context/AuthContext';

import GlobalStyle from './globalStyle';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
      <GlobalStyle />
			<AuthContextWrapper>
				<App/>
			</AuthContextWrapper>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

