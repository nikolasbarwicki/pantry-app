import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  white: '#FFFFFF',
  paleblue: '#F5F7FB',
  gray: '#6E6E6E',
  green: '#3AD3BF',
  red: '#FD808C',
  bold: 600,
  regular: 400,
  fontsize: {
    m: '1.6rem',
    l: '2.4rem',
    xl: '3.6rem',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
