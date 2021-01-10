import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  input {
    ${({ error }) => error ? 'border-color: red;' : ''};
  }
`;

export const ErrorContainer = styled.span`
  color: red;
`;

export const LabelContainer = styled.span`
  margin-bottom: 4px;
`;