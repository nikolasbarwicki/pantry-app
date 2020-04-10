import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Theme from 'theme/Theme';
import styled from 'styled-components';
import Content from 'templates/Content';
import Sidebar from 'templates/Sidebar';
import { Provider } from 'react-redux';
import store from 'store';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

const Root = () => {
  return (
    <Provider store={store}>
      <Theme>
        <Wrapper>
          <GlobalStyle />
          <Sidebar />
          <Content />
        </Wrapper>
      </Theme>
    </Provider>
  );
};

export default Root;
