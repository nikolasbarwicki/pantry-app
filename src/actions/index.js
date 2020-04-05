export const deleteItem = (item) => {
  return {
    type: 'DEL_ITEM',
    payload: item,
  };
};
