import reducer, { initialState } from '../reducer';
import { addItem, deleteItem, toggleItem, filterChange } from '../actions';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const mockAction = addItem('Test Content');
    const result = reducer(undefined, mockAction);
    expect(result.items).toHaveLength(4);
    expect(result.items[3].id === 4);
    expect(result.items[3].content === 'Test Content');
  });

  it('should delete an item on DELETE_ITEM', () => {
    const mockAction = deleteItem(1);
    const result = reducer(undefined, mockAction);
    expect(result.items).toHaveLength(2);
  });

  it('should change completed value on TOGGLE_ITEM', () => {
    const mockAction = toggleItem(0);
    const result = reducer(undefined, mockAction);
    expect(result.items[0].completed === false).toBe(false);
  });

  it('should filter setting should be changed with FILTER', () => {
    const mockAction = filterChange('COMPLETED');
    const result = reducer(undefined, mockAction);
    expect(result.filter === 'COMPLETED').toBe(true);
  });

});
