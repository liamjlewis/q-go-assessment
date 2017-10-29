import { ADD_ITEM, DELETE_ITEM, UN_DELETE_ITEM, TOGGLE_ITEM } from '../constants';

let nextId = 6;

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable', completed: true, index: 0 },
    { id: 2, content: 'Add filters (Use HOC)', completed: true, index: 1 },
    { id: 3, content: 'Add end-to-end testing', completed: false, index: 2 },
  ],
  deleted: [
    { id: 4, content: 'Delete this', completed: true, index: 3 },
    { id: 5, content: 'And delete this', completed: true, index: 4 },
  ],
};

const reducerItems = (state = initialState, action) => {
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

      let deletedItems = state.deleted;

      return Object.assign({}, state, {
          items: state.items.filter((item) => {
            (item.id === action.id) && (deletedItems.push(item))
            return item.id !== action.id
          })
        }, {
          deleted: deletedItems} );

    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        items: state.items.map(item =>
          (item.id === action.id) 
            ? {...item, completed: !item.completed}
            : item
          )
      })

    case UN_DELETE_ITEM:

      var itemsArray = [...state.items];

      return Object.assign({}, state, {
        deleted: state.deleted.filter(function(item){
          (item.id === action.id) && ( itemsArray.splice(item.index, 0, item) );
          return item.id !== action.id;
        }
      )}, {
        items: itemsArray} );

    default:
      return state;
  }
};

export default reducerItems;