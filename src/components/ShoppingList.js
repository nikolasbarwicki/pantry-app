import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bellIcon from 'assets/bell_icon.svg';
import ShoppingListItem from 'components/ShoppingListItem';

const StyledHeading = styled.h2`
  font-size: 2.4rem;
  margin: 0;
`;

const HeadingWrapper = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
`;

const ShoppingList = ({ items }) => {
  return (
    <div>
      <HeadingWrapper>
        <StyledHeading>Shopping list</StyledHeading>
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

const mapStateToProps = (state) => {
  return state;
};

ShoppingList.propTypes = {
  items: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ShoppingList);
