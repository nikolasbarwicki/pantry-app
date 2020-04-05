import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListText from 'components/ListText';
import Counter from 'components/Counter';
import Icon from 'components/Icon';
import ButtonIcon from 'components/ButtonIcon';

import deleteIcon from 'assets/delete_icon.svg';

const StyledWrapper = styled.div`
  background-color: white;
  margin: 20px;
  width: 1240px;
  height: 66px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 70px 230px 340px repeat(4, 1fr);
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

const ListItem = ({ cat, item, qty, min }) => {
  return (
    <StyledWrapper>
      <Icon iconType={cat} />
      <ListText start="true">{categories[cat]}</ListText>
      <ListText start="true" bold="true">
        {item}
      </ListText>
      <Counter value={qty} />
      <Counter value={min} />
      <ListText bold color={qty - min > 0 ? 'green' : 'red'}>
        {qty - min > 0 ? `+${qty - min}` : qty - min}
      </ListText>
      <ButtonIcon icon={deleteIcon} />
    </StyledWrapper>
  );
};

ListItem.propTypes = {
  cat: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default ListItem;
