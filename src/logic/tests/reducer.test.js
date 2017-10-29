import reducerTodos, { initialState as initialStateTodos } from '../reducers/reducerTodos';
import reducerFilter, { initialState as initialStateFilter } from '../reducers/reducerFilter';
import { addItem, deleteItem, unDeleteItem, toggleItem, filterChange } from '../actions';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducerTodos(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducerTodos(undefined, mockAction);
    expect(result).toEqual(initialStateTodos);
  });

  it('should add new items on ADD_ITEM', () => {
    const mockAction = addItem('Test Content');
    const result = reducerTodos(undefined, mockAction);
    expect(result.items).toHaveLength(4);
    expect(result.items[3].id === 4);
    expect(result.items[3].content === 'Test Content');
  });

  it('should delete an item on DELETE_ITEM', () => {
    const mockAction = deleteItem(1);
    const result = reducerTodos(undefined, mockAction);
    expect(result.items).toHaveLength(2);
  });

  it('should un-delete an item on UN_DELETE_ITEM', () => {
    const mockAction = unDeleteItem(1);
    const result = reducerTodos(undefined, mockAction);
    expect(result.deleted).toHaveLength(2);
  });

  it('should change completed value on TOGGLE_ITEM', () => {
    const mockAction = toggleItem(0);
    const result = reducerTodos(undefined, mockAction);
    expect(result.items[0].completed === false).toBe(false);
  });

  it('filter setting should be changed with FILTER', () => {
    const mockAction = filterChange('COMPLETED');
    const result = reducerFilter(undefined, mockAction);
    expect(result.setting === 'COMPLETED').toBe(true);
  });

});
