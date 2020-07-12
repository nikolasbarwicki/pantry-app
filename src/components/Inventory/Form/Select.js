import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  border: none;
  background-color: ${(props) => props.theme.paleblue};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  width: 80%;
  :focus {
    outline: none;
  }
  justify-self: start;
  color: ${(props) => props.theme.gray};
`;

const Select = ({ name, value, onChange }) => {
  return (
    <StyledSelect name={name} value={value} onChange={onChange}>
      <option value="bread">Bakery</option>
      <option value="fruit">Fruit & Vegetables</option>
      <option value="meat">Meat & Poultry</option>
      <option value="diary">Dairy & Eggs</option>
      <option value="home">Household</option>
      <option value="pantry">Pantry</option>
    </StyledSelect>
  );
};

export default Select;
