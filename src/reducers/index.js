const initialState = {
  items: [
    { cat: 'bread', item: 'Bread', qty: 2, min: 1 },
    { cat: 'fruit', item: 'Bananas', qty: 5, min: 5 },
    { cat: 'fruit', item: 'Carrots', qty: 1, min: 2 },
    { cat: 'diary', item: 'Milk', qty: 0, min: 3 },
    { cat: 'home', item: 'Toilet paper', qty: 0, min: 6 },
    { cat: 'pantry', item: 'Bread flour', qty: 4, min: 4 },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEL_ITEM':
      return {
        ...state,
        items: [...state.items.filter((el) => el.item !== action.payload)],
      };

    default:
      return state;
  }
};

export default rootReducer;
