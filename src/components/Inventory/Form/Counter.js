import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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

const Input = styled.input`
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

const Counter = ({ field, form }) => (
  <div>
    <Button
      onClick={() =>
        form.setFieldValue(field.name, form.values[field.name] - 1)
      }
      type="button"
    >
      -
    </Button>
    <Input value={form.values[field.name]} type="text" />
    <Button
      onClick={() =>
        form.setFieldValue(field.name, form.values[field.name] + 1)
      }
      type="button"
    >
      +
    </Button>
  </div>
);

export default Counter;
