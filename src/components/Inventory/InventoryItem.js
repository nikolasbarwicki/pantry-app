import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import Counter from 'components/Inventory/Counter';
import Icon from 'components/Icon';
import Button from 'components/Button';
import { connect } from 'react-redux';
import { deleteItem as deleteItemAction } from 'actions';

import deleteIcon from 'assets/delete_icon.svg';

const Wrapper = styled.div`
  background-color: white;
  margin: 20px;
  width: 100%;
  height: 66px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 60px minmax(150px, 180px) minmax(150px, 220px) repeat(
      4,
      1fr
    );
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;

const categories = {
  bread: 'Bakery',
  fruit: 'Fruit & Vegetables',
  diary: 'Dairy & Eggs',
  meat: 'Meat & Poultry',
  home: 'Household',
  pantry: 'Pantry',
};

const ListItem = ({ cat, item, qty, min, deleteItem }) => {
  return (
    <Wrapper>
      <Icon iconType={cat} />
      <Paragraph start>{categories[cat]}</Paragraph>
      <Paragraph start bold>
        {item}
      </Paragraph>
      <Counter value={qty} qty item={item} />
      <Counter value={min} item={item} />
      <Paragraph bold color={qty - min > 0 ? 'green' : 'red'}>
        {qty - min > 0 ? `+${qty - min}` : qty - min}
      </Paragraph>
      <Button icon={deleteIcon} onClick={() => deleteItem(item)} />
    </Wrapper>
  );
};

ListItem.propTypes = {
  cat: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  deleteItem: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItemAction(item)),
});

export default connect(null, mapDispatchToProps)(ListItem);
