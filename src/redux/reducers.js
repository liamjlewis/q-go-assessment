import { combineReducers } from 'redux';
import reducerItems from '../logic/reducers/reducerTodos';
import reducerFilter from '../logic/reducers/reducerFilter';

export default function createReducer() {
  return combineReducers({
    todos: reducerItems,
    filter: reducerFilter,
  });
}