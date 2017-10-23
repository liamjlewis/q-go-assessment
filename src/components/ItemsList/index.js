import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, onDelete }) => {
  return (
    <div>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => <li key={item.id}>{item.content} 
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
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  onDelete: theItem => dispatch(deleteItem(theItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);