import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div``;

const StyledButton = styled.button`
  font-family: inherit;
  color: ${(props) => props.theme.gray};
  background: none;
  border: none;
  :focus {
    outline: none;
  }
  cursor: pointer;
  font-size: 1.6rem;
  font-size: ${(props) => props.theme.fontsize.m};
`;

const StyledInput = styled.input`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  text-align: center;
  width: 20px;
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  font-size: ${(props) => props.theme.fontsize.m};
  border: none;

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: ${(props) => props.theme.paleblue};
      color: ${(props) => props.theme.gray};
    `}
`;

const Counter = ({ value, transparent }) => {
  return (
    <StyledWrapper>
      <StyledButton>-</StyledButton>
      <StyledInput type="number" value={value} transparent={transparent} />
      <StyledButton>+</StyledButton>
    </StyledWrapper>
  );
};

Counter.propTypes = {
  value: PropTypes.string.isRequired,
  transparent: PropTypes.bool.isRequired,
};

export default Counter;
