import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import tickIcon from 'assets/tick_icon.svg';

import { connect } from 'react-redux';
import { addPurchase as addPurchaseAction } from 'actions';
import Button from '../Button';

const Wrapper = styled.div`
  height: 35px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 35px 1fr min-content 25px;
  align-items: center;
  margin: 20px 0;
`;

const ShoppingListItem = ({ cat, item, buy, addPurchase }) => {
  return (
    <Wrapper>
      <Icon iconType={cat} />
      <Paragraph bold>{item}</Paragraph>
      <Paragraph bold>{-buy}</Paragraph>
      <Button icon={tickIcon} onClick={() => addPurchase(item)} />
    </Wrapper>
  );
};

ShoppingListItem.propTypes = {
  cat: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  buy: PropTypes.number.isRequired,
  addPurchase: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addPurchase: (item) => dispatch(addPurchaseAction(item)),
});

export default connect(null, mapDispatchToProps)(ShoppingListItem);
