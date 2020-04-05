import React from 'react';
import styled from 'styled-components';

import ListText from 'components/ListText';
import Counter from 'components/Counter';
import ButtonIcon from 'components/ButtonIcon';
import Dropdown from 'components/Dropdown';
import TextInput from 'components/TextInput';

import addIcon from 'assets/add_icon.svg';

const StyledWrapper = styled.div`
  background-color: none;
  margin: 20px;
  width: 1240px;
  height: 66px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 300px 340px repeat(4, 1fr);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23D9D9D9FF' stroke-width='1' stroke-dasharray='8%2c8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 20px;
`;

const ListItem = () => {
  return (
    <StyledWrapper>
      <Dropdown />
      <TextInput />
      <Counter value={0} transparent />
      <Counter value={0} transparent />
      <ListText bold transparent>
        +1
      </ListText>
      <ButtonIcon icon={addIcon} transparent />
    </StyledWrapper>
  );
};

export default ListItem;
