import { ADD_ITEM, DELETE_ITEM, UN_DELETE_ITEM, TOGGLE_ITEM, FILTER } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = id => {
  return { type: DELETE_ITEM, id };
};

export const unDeleteItem = id => {
  return { type: UN_DELETE_ITEM, id };
};

export const toggleItem = id => {
  return { type: TOGGLE_ITEM, id };
};

export const filterChange = value => {
  return { type: FILTER, value };
};