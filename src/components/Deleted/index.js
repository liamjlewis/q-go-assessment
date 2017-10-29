import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { unDeleteItem } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ deletedItems, onUnDelete }) => {
  return (
    <div>
      <h2>Deleted Items</h2>
      <Link to="/">Back to list</Link>
      <ul className={'itemsList-ul'}>
        {deletedItems.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {deletedItems.map(item => 
          <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none'}}>
            {item.content}
            &nbsp;
            <input
              className={'itemList-button btn-delete'}
              type="button"
              value={'restore'}
              onClick={() => onUnDelete(item.id)}
            />
          </li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  deletedItems: PropTypes.array.isRequired,
  onUnDelete: PropTypes.func,
};

const mapStateToProps = state => {
  return { deletedItems: state.todos.deleted };
};

const mapDispatchToProps = dispatch => ({
  onUnDelete: theItem => dispatch(unDeleteItem(theItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);