import React, { PropTypes } from 'react';

// const ThingsList = ({ things, onDeleteThingClick }) => {
//   return things.map(({ _id, name, info }) => (
//     <ul 
//       className='nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6'
//       key={_id}>
//       <li>
//         <a href='#'>
//           {name}<button 
//                   type='button' 
//                   className='close' 
//                   onClick={onDeleteThingClick.bind(this)}>&times;</button>
//         </a>
//       </li>
//     </ul>
//   ));
// };

class ThingsList extends React.Component {
  
  render() {
 const things = this.props.things;
  const onDeleteThingClick = (id) => {
    console.log(id);
  };


  console.log(things);
   return (
      <div>
        {things.map(({ _id, name, info }) => {
          return (
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
      </ul>)

        })}
      </div>
    );
  }
}

ThingsList.propTypes = {
  things: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDeleteThingClick: PropTypes.func.isRequired
};

export default ThingsList;
