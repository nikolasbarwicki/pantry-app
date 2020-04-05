import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  border: none;
  background-color: ${(props) => props.theme.paleblue};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  width: 200px;
  :focus {
    outline: none;
  }
  margin-left: 83px;
  justify-self: start;
  color: ${(props) => props.theme.gray};
`;

const StyledOption = styled.option`
  color: ${(props) => props.theme.gray};
`;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'none' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;

    return (
      <form>
        <StyledSelect value={value} onChange={this.handleChange}>
          <StyledOption value="none" hidden disabled>
            select category
          </StyledOption>
          <StyledOption value="bread">Bakery</StyledOption>
          <StyledOption value="fruit">Fruit & Vegetables</StyledOption>
          <StyledOption value="meat">Meat & Poultry</StyledOption>
          <StyledOption value="diary">Dairy & Eggs</StyledOption>
          <StyledOption value="home">Household</StyledOption>
          <StyledOption value="pantry">Pantry</StyledOption>
        </StyledSelect>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}
export default Dropdown;
