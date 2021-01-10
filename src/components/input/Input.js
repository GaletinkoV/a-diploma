import React from 'react';
import { Container, ErrorContainer, LabelContainer } from './style';

const Input = ({ label, error, value, onChange, ...restProps }) => {
	return (
		<Container error={error}>
			{label && <LabelContainer>{label}</LabelContainer>}
			<input
				className="form-control"
				value={value}
				onChange={onChange}
				{...restProps}
			/>
			<ErrorContainer>{error}</ErrorContainer>
		</Container>
	);
};

export default Input;
