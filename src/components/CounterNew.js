import React from 'react';
import styled from 'styled-components';

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
  background-color: ${(props) => props.theme.paleblue};
  color: ${(props) => props.theme.gray};
`;

class CounterNew extends React.Component {
  state = { value: 0 };

  decrement = () => {
    this.setState(
      (prevState) => ({
        value: prevState.value - 1,
      }),
      () => this.props.setFieldValue(this.props.name, this.state.value),
    );
  };

  increment = () => {
    this.setState(
      (prevState) => ({
        value: prevState.value + 1,
      }),
      () => this.props.setFieldValue(this.props.name, this.state.value),
    );
  };

  render() {
    const { value } = this.state;

    return (
      <StyledWrapper>
        <StyledButton onClick={() => this.decrement()} type="button">
          -
        </StyledButton>
        <StyledInput value={value} type="text" />
        <StyledButton onClick={() => this.increment()} type="button">
          +
        </StyledButton>
      </StyledWrapper>
    );
  }
}

export default CounterNew;
