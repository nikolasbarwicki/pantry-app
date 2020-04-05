import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Theme from 'theme/Theme';
import styled from 'styled-components';
import Inventory from 'components/Inventory';
import Sidebar from 'components/Sidebar';
import { Provider } from 'react-redux';
import store from 'store';

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

const Root = () => {
  return (
    <Provider store={store}>
      <Theme>
        <MainWrapper>
          <GlobalStyle />
          <Sidebar />
          <Inventory />
        </MainWrapper>
      </Theme>
    </Provider>
  );
};

export default Root;
