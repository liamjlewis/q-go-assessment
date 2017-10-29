import { FILTER } from '../constants';

export const initialState = {
  setting: 'ALL',
};

const reducerFilter = (state = initialState, action) => {
  switch (action.type) {
    
    case FILTER:
      return Object.assign({}, state, {setting: action.value})

    default:
      return state;
  }
};

export default reducerFilter;