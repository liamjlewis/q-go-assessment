import React from 'react';
import { shallow } from 'enzyme';
import { Deleted } from '../index';

const unDeleteMock = jest.fn();

const defaultProps = {
  deletedItems: [
    { id: 1, content: 'Test 1', completed: false, index: 1 }, 
    { id: 1, content: 'Test 1', completed: false, index: 1 },],
  onUnDelete: unDeleteMock,
};
const defaultPropsSingle = {
  deletedItems: [
    { id: 1, content: 'Test 1', completed: false, index: 1 }, ],
  onUnDelete: unDeleteMock,
};

const renderedItem = shallow(<Deleted {...defaultProps} />);
const renderedItemSingle = shallow(<Deleted {...defaultPropsSingle} />);

describe('Deleted', () => {
  it('renders without crashing', () => {
    shallow(<Deleted {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItemEmpty = shallow(<Deleted deletedItems={[]} />);
    expect(renderedItemEmpty.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should render the restore button', () => {
    expect(renderedItem.find('li .btn-restore').length).not.toBeLessThan(1);
  });

  it('should let me restore a list item', () => {
    expect(unDeleteMock.mock.calls.length).toEqual(0);
    renderedItemSingle.find('li .btn-restore').simulate('click');
    expect(unDeleteMock.mock.calls.length).toEqual(1);
  });

});
