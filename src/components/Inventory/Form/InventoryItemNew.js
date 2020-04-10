import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
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
  width: 1240px;
  height: 66px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 300px 340px repeat(4, 1fr);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23D9D9D9FF' stroke-width='1' stroke-dasharray='8%2c8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 20px;
`;

const ListItemNew = ({ addItem }) => {
  const formik = useFormik({
    initialValues: {
      cat: 'bread',
      item: '',
      qty: 0,
      min: 0,
    },
    onSubmit: (values) => {
      addItem(values);
    },
  });

  return (
    <StyledWrapper onSubmit={formik.handleSubmit}>
      <Select name="cat" value={formik.cat} onChange={formik.handleChange} />
      <Input
        type="text"
        name="item"
        onChange={formik.handleChange}
        value={formik.values.item}
        placeholder="add new item..."
      />
      <Counter type="text" name="qty" setFieldValue={formik.setFieldValue} />
      <Counter type="text" name="min" setFieldValue={formik.setFieldValue} />
      <Button icon={addIcon} type="submit" transparent />
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(ListItemNew);
