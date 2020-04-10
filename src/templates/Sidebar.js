import React from 'react';
import styled from 'styled-components';

import pantryAppLogo from 'assets/pantryapp_logo.svg';
import ShoppingList from 'components/ShoppingList/ShoppingList';
import Categories from 'components/Categories/Categories';

const Wrapper = styled.div`
  display: grid;
  padding: 50px;
  grid-gap: 50px;
  grid-template-rows: 65px 1fr 320px;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <img src={pantryAppLogo} alt="Pantry App Logo" />
      <ShoppingList />
      <Categories />
    </Wrapper>
  );
};

export default Sidebar;
