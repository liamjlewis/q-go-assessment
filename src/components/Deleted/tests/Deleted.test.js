import React from 'react';
import { shallow } from 'enzyme';
import { ItemsList } from '../index';

const deleteMock = jest.fn();
const toggleMock = jest.fn();
const filterMock = jest.fn();

const defaultProps = {
  items: [{ id: 1, content: 'Test 1', completed: true }, 
          { id: 1, content: 'Test 1', completed: false }],
  onDelete: deleteMock,
  onToggle: toggleMock,
  onFilterChange: filterMock,
};
const defaultPropsBasic = {
  items: [{ id: 1, content: 'Test 1', completed: false }],
  onDelete: deleteMock,
  onToggle: toggleMock,
  onFilterChange: filterMock,
};

const renderedItemBasic = shallow(<ItemsList {...defaultPropsBasic} />);
const renderedItem = shallow(<ItemsList {...defaultProps} />);

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItemEmpty = shallow(<ItemsList items={[]} />);
    expect(renderedItemEmpty.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should render the delete button', () => {
    expect(renderedItem.find('li .btn-delete').length).not.toBeLessThan(1);
  });

  it('should render the completed button', () => {
    expect(renderedItem.find('li .btn-completed').length).not.toBeLessThan(1);
  });

  it('should render the filter drop down', () => {
    expect(renderedItem.find('.select-filter').length).not.toBeLessThan(1);
  });

  it('should let me delete a list item', () => {
    expect(deleteMock.mock.calls.length).toEqual(0);
    renderedItemBasic.find('li .btn-delete').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  });

  it('should let me toggle complete', () => {
    expect(toggleMock.mock.calls.length).toEqual(0);
    renderedItemBasic.find('li .btn-completed').simulate('click');
    expect(toggleMock.mock.calls.length).toEqual(1);
  });

  it('should let me change filter', () => {
    expect(filterMock.mock.calls.length).toEqual(0);
    renderedItemBasic.find('.select-filter').simulate('change', { target: { value: 'COMPLETED' } })
    expect(filterMock.mock.calls.length).toEqual(1);
  });

});
