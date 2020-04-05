import React from 'react';
import styled from 'styled-components';

import ListItem from 'components/ListItem';
import ListItemNew from 'components/ListItemNew';
import ListText from 'components/ListText';

const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.paleblue};
  height: 100vh;
  padding: 0 80px;
`;

const Heading = styled(ListText)`
  font-weight: 600;
  font-size: 3.6rem;
  margin-left: 20px;
`;

class Inventory extends React.Component {
  state = [
    { cat: 'bread', item: 'Bread', qty: 2, min: 1 },
    { cat: 'fruit', item: 'Bananas', qty: 5, min: 5 },
    { cat: 'fruit', item: 'Carrots', qty: 1, min: 2 },
    { cat: 'diary', item: 'Milk', qty: 0, min: 3 },
    { cat: 'home', item: 'Toilet paper', qty: 0, min: 6 },
    { cat: 'pantry', item: 'Bread flour', qty: 4, min: 4 },
  ];

  render() {
    const { items } = this.state;

    return (
      <StyledWrapper>
        <Heading>Inventory</Heading>
        {items.map((item) => (
          <ListItem cat={item.cat} item={item.item} qty={item.qty} min={item.min} />
        ))}

        <ListItemNew />
      </StyledWrapper>
    );
  }
}

export default Inventory;
