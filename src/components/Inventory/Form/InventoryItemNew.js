import React from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

import Counter from 'components/Inventory/Form/Counter';
import Button from 'components/Button';
import Select from 'components/Inventory/Form/Select';
import Input from 'components/Inventory/Form/Input';
import addIcon from 'assets/add_icon.svg';

const StyledWrapper = styled.form`
  background-color: none;
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
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23D9D9D9FF' stroke-width='1' stroke-dasharray='8%2c8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 20px;
`;

const ListItemNew = ({ addItem }) => (
  <Formik
    initialValues={{ cat: 'bread', item: '', qty: 0, min: 0 }}
    onSubmit={(values, { resetForm }) => {
      addItem(values);
      resetForm({});
    }}
  >
    {(props) => (
      <StyledWrapper onSubmit={props.handleSubmit} autoComplete="off">
        <div />
        <Select name="cat" value={props.cat} onChange={props.handleChange} />
        <Input
          type="text"
          name="item"
          onChange={props.handleChange}
          value={props.values.item}
          placeholder="add new item..."
        />

        <Field name="qty" component={Counter} />
        <Field name="min" component={Counter} />
        <div />
        <Button icon={addIcon} type="submit" transparent />
      </StyledWrapper>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(ListItemNew);
