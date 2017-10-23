import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, toggleItem, filterChange } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, onDelete, onToggle, onFilterChange }) => {
  return (
    <div>
      <span>Show: </span>
      <select onChange={(e) => onFilterChange(e.target.value)} className={'select-filter'}>
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed tasks</option>
        <option value="ACTIVE">Active tasks</option>
      </select>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => 
          <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none'}}>
            {item.content}
            &nbsp;
            <input
              className={'itemList-button btn-completed'}
              type="button"
              value={item.completed ? 'Unmark' : 'Mark as done'}
              onClick={() => onToggle(item.id)}
            />
            &nbsp;
            <input
              className={'itemList-button btn-delete'}
              type="button"
              value={'Delete'}
              onClick={() => onDelete(item.id)}
            />
          </li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
  onFilterChange: PropTypes.func,
};

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'ALL':
      return items
    case 'COMPLETED':
      return items.filter(t => t.completed)
    case 'ACTIVE':
      return items.filter(t => !t.completed)
    default:
      return items
  }
}

const mapStateToProps = state => {
  return { items: getVisibleItems(state.todos.items, state.todos.filter) };
};

const mapDispatchToProps = dispatch => ({
  onDelete: theItem => dispatch(deleteItem(theItem)),
  onToggle: theItem => dispatch(toggleItem(theItem)),
  onFilterChange: theItem => dispatch(filterChange(theItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);