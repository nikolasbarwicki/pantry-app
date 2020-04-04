import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Theme from 'theme/Theme';

const Root = () => {
  return (
    <Theme>
      <div>
        <GlobalStyle />
        <h2>Hello Nikolas</h2>
      </div>
    </Theme>
  );
};

export default Root;
