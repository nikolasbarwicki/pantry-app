import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';

const Wrapper = styled.div`
  height: 35px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 35px 1fr 25px;
  align-items: center;
  margin: 10px 0;
`;

const Value = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 3px;
  background: ${(props) => props.theme.gray};
  color: white;
  text-align: center;
`;

const CategoriesItem = ({ cat, name, value = 0 }) => {
  return (
    <Wrapper>
      <Icon iconType={cat} />
      <Paragraph>{name}</Paragraph>
      <Value>{value}</Value>
    </Wrapper>
  );
};

CategoriesItem.propTypes = {
  cat: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CategoriesItem;
