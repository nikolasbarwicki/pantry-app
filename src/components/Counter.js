import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  quantityInc as quantityIncAction,
  quantityDec as quantityDecAction,
  minimumInc as minimumIncAction,
  minimumDec as minimumDecAction,
} from 'actions';

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

const Counter = ({
  value,
  transparent,
  qty,
  item,
  quantityInc,
  quantityDec,
  minimumInc,
  minimumDec,
}) => {
  return (
    <StyledWrapper>
      <StyledButton
        onClick={qty ? () => quantityDec(item) : () => minimumDec(item)}
      >
        -
      </StyledButton>
      <StyledInput type="number" value={value} transparent={transparent} />
      <StyledButton
        onClick={qty ? () => quantityInc(item) : () => minimumInc(item)}
      >
        +
      </StyledButton>
    </StyledWrapper>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  quantityInc: PropTypes.func.isRequired,
  quantityDec: PropTypes.func.isRequired,
  minimumInc: PropTypes.func.isRequired,
  minimumDec: PropTypes.func.isRequired,
  qty: PropTypes.number,
  transparent: PropTypes.bool.isRequired,
};

Counter.defaultProps = {
  qty: null,
};

const mapDispatchToProps = (dispatch) => ({
  quantityInc: (item) => dispatch(quantityIncAction(item)),
  quantityDec: (item) => dispatch(quantityDecAction(item)),
  minimumInc: (item) => dispatch(minimumIncAction(item)),
  minimumDec: (item) => dispatch(minimumDecAction(item)),
});

export default connect(null, mapDispatchToProps)(Counter);
