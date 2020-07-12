import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph';

const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
  height: 40px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 60px minmax(150px, 180px) minmax(150px, 220px) repeat(
      4,
      1fr
    );
`;

const TableHead = () => {
  return (
    <Wrapper>
      <Paragraph>Icon</Paragraph>
      <Paragraph start>Category</Paragraph>
      <Paragraph start>Name</Paragraph>
      <Paragraph>Quantity</Paragraph>
      <Paragraph>Minimum</Paragraph>
      <Paragraph>Actual</Paragraph>
      <Paragraph>Edit</Paragraph>
    </Wrapper>
  );
};

export default TableHead;
