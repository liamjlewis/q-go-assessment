import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, toggleItem } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, onDelete, onToggle }) => {
  return (
    <div>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => 
          <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none'}}>
            {item.content}
            &nbsp;
            <input
              className={'itemList-button btn-delete'}
              type="button"
              value={item.completed ? 'Unmark' : 'Mark as done'}
              onClick={() => onToggle(item.id)}
            />
            &nbsp;
            <input
              className={'itemList-button btn-completed'}
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
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  onDelete: theItem => dispatch(deleteItem(theItem)),
  onToggle: theItem => dispatch(toggleItem(theItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);