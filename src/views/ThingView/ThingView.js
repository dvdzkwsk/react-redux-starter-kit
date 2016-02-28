import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ThingsList from '../../components/ThingsList';
import ThingForm from '../../components/ThingForm';
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

    this.handleDeleteThingClick = this.handleDeleteThingClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount () {
    this.props.getThing();
  }

  handleDeleteThingClick (_id) {
    this.props.deleteThing(_id);
  }

  handleFormSubmit ({ name, info }) {
    this.props.postThing({ name, info });
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>

            <h1 className='text-center'>Features</h1>

            <ThingsList
              things={this.props.things}
              onDeleteThingClick={this.handleDeleteThingClick} />

          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>

            <h1 className='text-center'>Sync realtime across clients</h1>

            <ThingForm onFormSubmit={this.handleFormSubmit} />

          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ things }) => ({
  things
});

export default connect(mapStateToProps, {
  getThing,
  postThing,
  deleteThing
})(ThingView);
