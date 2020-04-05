import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 1.6rem;
  font-family: 'Montserrat';
  color: #000;
  background-color: ${(props) => props.theme.paleblue};
  border: none;
  padding-left: 25px;
  justify-self: start;
  :focus {
    outline: none;
  }
`;

const TextInput = () => {
  return <StyledInput type="text" placeholder="add new item" />;
};

export default TextInput;
