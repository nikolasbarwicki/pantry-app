export const deleteItem = (item) => {
  return {
    type: 'DEL_ITEM',
    payload: item,
  };
};

export const quantityInc = (item) => {
  return {
    type: 'QTY_INC',
    payload: item,
  };
};

export const quantityDec = (item) => {
  return {
    type: 'QTY_DEC',
    payload: item,
  };
};

export const minimumInc = (item) => {
  return {
    type: 'MIN_INC',
    payload: item,
  };
};

export const minimumDec = (item) => {
  return {
    type: 'MIN_DEC',
    payload: item,
  };
};
