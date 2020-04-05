import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Theme from 'theme/Theme';
import styled from 'styled-components';
import Inventory from 'components/Inventory';
import Sidebar from 'components/Sidebar';

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

const Root = () => {
  return (
    <Theme>
      <MainWrapper>
        <GlobalStyle />
        <Sidebar />
        <Inventory />
      </MainWrapper>
    </Theme>
  );
};

export default Root;
