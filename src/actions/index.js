import {
  DELETE_ITEM,
  ADD_ITEM,
  QUANTITY_INCREASE,
  QUANTITY_DECREASE,
  MINIMUM_INCREASE,
  MINIMUM_DECREASE,
  ADD_PURCHASE,
} from 'actions/types';

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const quantityInc = (item) => {
  return {
    type: QUANTITY_INCREASE,
    payload: item,
  };
};

export const quantityDec = (item) => {
  return {
    type: QUANTITY_DECREASE,
    payload: item,
  };
};

export const minimumInc = (item) => {
  return {
    type: MINIMUM_INCREASE,
    payload: item,
  };
};

export const minimumDec = (item) => {
  return {
    type: MINIMUM_DECREASE,
    payload: item,
  };
};

export const addPurchase = (item) => {
  return {
    type: ADD_PURCHASE,
    payload: item,
  };
};
