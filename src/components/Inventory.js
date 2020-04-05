import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import ListItemNew from 'components/ListItemNew';
import ListText from 'components/ListText';

const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.paleblue};
  height: 100vh;
  padding: 0 80px;
`;

const Heading = styled(ListText)`
  font-weight: 600;
  font-size: 3.6rem;
  margin-left: 20px;
`;

const Inventory = ({ items }) => {
  return (
    <StyledWrapper>
      <Heading>Inventory</Heading>
      {items.map((item) => (
        <ListItem
          cat={item.cat}
          item={item.item}
          qty={item.qty}
          min={item.min}
        />
      ))}
      <ListItemNew />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return state;
};

Inventory.propTypes = {
  items: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Inventory);
