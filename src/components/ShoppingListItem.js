import React from 'react';
import styled from 'styled-components';
import ListText from 'components/ListText';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import tickIcon from 'assets/tick_icon.svg';
import ButtonIcon from './ButtonIcon';

const Wrapper = styled.div`
  height: 35px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 35px 1fr min-content 25px;
  align-items: center;
  margin: 20px 0;
`;

const ShoppingListItem = ({ cat, item, buy }) => {
  return (
    <Wrapper>
      <Icon iconType={cat} />
      <ListText bold="true">{item}</ListText>
      <ListText bold="true">{-buy}</ListText>
      <ButtonIcon icon={tickIcon} />
    </Wrapper>
  );
};

ShoppingListItem.propTypes = {
  cat: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  buy: PropTypes.number.isRequired,
};

export default ShoppingListItem;
