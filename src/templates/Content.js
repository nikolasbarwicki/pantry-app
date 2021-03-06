import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InventoryItem from 'components/Inventory/InventoryItem';
import InventoryItemNew from 'components/Inventory/Form/InventoryItemNew';
import Heading from 'components/Heading';
import TableHead from 'components/TableHead';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.paleblue};
  height: 100vh;
  width: 100%;
  padding: 5vh 4vw;
`;

const Content = ({ items }) => {
  return (
    <Wrapper>
      <Heading big bold margin="2rem">
        Inventory
      </Heading>
      <TableHead />
      {items.map((item) => (
        <InventoryItem
          cat={item.cat}
          item={item.item}
          qty={item.qty}
          min={item.min}
        />
      ))}
      <InventoryItemNew />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { items: state.items };
};

Content.propTypes = {
  items: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Content);
