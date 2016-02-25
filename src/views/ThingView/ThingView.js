import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ThingsList from '../../components/ThingsList';
import { getThing,
         postThing, 
         deleteThing } from '../../redux/modules/thing';

export class ThingView extends React.Component {
  static propTypes = {
    things: PropTypes.array.isRequired,
    getThing: PropTypes.func.isRequired,
    postThing: PropTypes.func.isRequired,
    deleteThing: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.getThing = this.props.getThing.bind(this);
    this.deleteThing = this.props.deleteThing.bind(this);
  }

  componentDidMount () {
    this.getThing();
  }

  render () {
    const addThing = () => console.log('hey');
    const thingss = [{
      _id: '123',
      name: 'name',
      info: 'info'
    }];
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>

            <h1 className='page-header'>Features:</h1>
            <ThingsList 
              things={this.props.things}
              onDeleteThingClick={this.props.deleteThing} />

          </div>
        </div>

        <form className='thing-form'>
          <label>Syncs in realtime across clients</label>
          <p className='input-group'>
            <input type='text' className='form-control' placeholder='Add a new thing here.' ng-model='main.newThing' />
            <span className='input-group-btn'>
              <button type='submit' className='btn btn-primary' onClick={addThing}>Add New</button>
            </span>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ things }) => ({
  things
});

export default connect((mapStateToProps), {
  getThing,
  postThing,
  deleteThing
})(ThingView);
