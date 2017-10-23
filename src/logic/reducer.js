import { ADD_ITEM, DELETE_ITEM } from './constants';

let nextId = 3;

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable' },
    { id: 2, content: 'Add filters (Use HOC)' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        id: nextId++,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case DELETE_ITEM:
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          return item.id !== action.id
        })
      })

    default:
      return state;
  }
};

export default reducer;