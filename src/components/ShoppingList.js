import React from 'react';
import styled from 'styled-components';

import bellIcon from 'assets/bell_icon.svg';
import ShoppingListItem from 'components/ShoppingListItem';

const StyledHeading = styled.h2`
  font-size: 2.4rem;
  margin: 0;
`;

const HeadingWrapper = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
`;

class ShoppingList extends React.Component {
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
      <div>
        <HeadingWrapper>
          <StyledHeading>Shopping list</StyledHeading>
          <img src={bellIcon} alt="Notification bell icon" />
        </HeadingWrapper>
        {items.map((item) => {
          if (item.qty - item.min < 0) {
            return <ShoppingListItem cat={item.cat} item={item.item} buy={item.qty - item.min} />;
          }
          return null;
        })}
      </div>
    );
  }
}

export default ShoppingList;
