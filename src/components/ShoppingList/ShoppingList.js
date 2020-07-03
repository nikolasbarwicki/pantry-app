import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bellIcon from 'assets/bell_icon.svg';
import ShoppingListItem from 'components/ShoppingList/ShoppingListItem';
import Heading from 'components/Heading';

const HeadingWrapper = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

const ShoppingList = ({ items }) => {
  return (
    <div>
      <HeadingWrapper>
        <Heading>Shopping list</Heading>
        <img src={bellIcon} alt="Notification bell icon" />
      </HeadingWrapper>
      {items.map((item) => {
        if (item.qty - item.min < 0) {
          return (
            <ShoppingListItem
              cat={item.cat}
              item={item.item}
              buy={item.qty - item.min}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

ShoppingList.propTypes = {
  items: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(ShoppingList);
