import React, { PropTypes } from 'react';

const ThingsList = ({ things, onDeleteThingClick }) => (
  <div>
    {things.map(({ _id, name }) => (
      <ul
        className='nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6'
        key={_id}>
        <li>
          <a href='#'>
            {name}<button
                    type='button'
                    className='close'
                    onClick={onDeleteThingClick.bind(this, _id)}>&times;</button>
          </a>
        </li>
      </ul>
    ))}
  </div>
);

ThingsList.propTypes = {
  things: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDeleteThingClick: PropTypes.func.isRequired
};

export default ThingsList;
