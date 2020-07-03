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
    background-color: ${(props) => props.theme.paleblue};
  }
`;

const Input = ({ type, name, onChange, value, placeholder }) => {
  return (
    <StyledInput
      autoComplete="off"
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
