import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, FILTER } from './constants';

let nextId = 3;

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable', completed: true },
    { id: 2, content: 'Add filters (Use HOC)', completed: true },
  ],
  filter: 'ALL',
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

    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        items: state.items.map(item =>
          (item.id === action.id) 
            ? {...item, completed: !item.completed}
            : item
          )
      })

    case FILTER:
      return Object.assign({}, state, {filter: action.value})

    default:
      return state;
  }
};

export default reducer;