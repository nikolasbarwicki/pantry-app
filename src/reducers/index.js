import {
  DELETE_ITEM,
  ADD_ITEM,
  QUANTITY_INCREASE,
  QUANTITY_DECREASE,
  MINIMUM_INCREASE,
  MINIMUM_DECREASE,
  ADD_PURCHASE,
} from 'actions/types';

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
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((el) => el.item !== action.payload)],
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case QUANTITY_INCREASE:
      return {
        ...state,
        items: [
          ...state.items.map((el) =>
            el.item === action.payload ? { ...el, qty: el.qty + 1 } : el,
          ),
        ],
      };
    case QUANTITY_DECREASE:
      return {
        ...state,
        items: [
          ...state.items.map((el) =>
            el.item === action.payload ? { ...el, qty: el.qty - 1 } : el,
          ),
        ],
      };
    case MINIMUM_INCREASE:
      return {
        ...state,
        items: [
          ...state.items.map((el) =>
            el.item === action.payload ? { ...el, min: el.min + 1 } : el,
          ),
        ],
      };
    case MINIMUM_DECREASE:
      return {
        ...state,
        items: [
          ...state.items.map((el) =>
            el.item === action.payload ? { ...el, min: el.min - 1 } : el,
          ),
        ],
      };
    case ADD_PURCHASE:
      return {
        ...state,
        items: [
          ...state.items.map((el) =>
            el.item === action.payload ? { ...el, qty: el.min } : el,
          ),
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
