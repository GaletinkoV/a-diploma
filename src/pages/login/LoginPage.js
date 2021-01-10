import React, { useContext } from 'react';
import { useFormik } from 'formik';


import Input from '../../components/input/Input';
import Spinner from '../../components/spinner/Spinner';

import { Container } from './style';
import { AuthContext } from '../../context/AuthContext';
import http from '../../utils/http';


const asyncRequest = () => new Promise(resolve => setTimeout(() => resolve({ token: '123' }), 2000));

const LoginPage = () => {
	const { handleChangeAuthState } = useContext(AuthContext);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: async (data) => {
			try {
				// const result = await http.post('/auth/', data);
				const { token } = await asyncRequest();

				handleChangeAuthState(true, token);
			} catch (error) {
				console.log(error);
			}
		},
		validate: (values) => {
			const errors = {};

			if (!values.email) {
				errors.email = 'Required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			}
			if (!values.password) {
				errors.password = 'Required';
			}
			return errors;
		}
	});

	return (
		<Container
			onSubmit={formik.handleSubmit}
		>
			<div>
				<Input
					id='email'
					label='Email'
					name='email'
					type='email'
					placeholder='Enter email'
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.errors.email && formik.touched.email ? formik.errors.email : null}
				/>
			</div>
			<div>
				<Input
					label='Password'
					name='password'
					type='password'
					placeholder='Enter password'
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.errors.password && formik.touched.password ? formik.errors.password : null}
				/>
			</div>
			<button
				className="btn btn-primary"
				type="submit"
				disabled={formik.isSubmitting}
			>
				{formik.isSubmitting ? <><Spinner/> Loading...</> : 'Log in'}
			</button>
		</Container>
	);
};

export default React.memo(LoginPage);
