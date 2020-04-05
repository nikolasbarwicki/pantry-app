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

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => this.setState((prevState) => ({ count: prevState.count + 1 }));

  decrement = () => {
    const { counter } = this.state;
    return counter.count === 0
      ? null
      : this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { counter } = this.state;
    const { input } = this.props;

    return (
      <StyledWrapper>
        <StyledButton onClick={this.decrement}>-</StyledButton>
        <StyledInput
          type="number"
          value={counter.count}
          onChange={(e) => this.setState({ count: parseInt(e.target.value, 10) })}
          transparent={input.transparent}
        />
        <StyledButton onClick={this.increment}>+</StyledButton>
      </StyledWrapper>
    );
  }
}

Counter.propTypes = {
  transparent: PropTypes.string,
  input: PropTypes.string,
};

Counter.defaultProps = {
  transparent: false,
  input: null,
};

export default Counter;
