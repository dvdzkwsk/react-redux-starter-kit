import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

export class NavigationContainer extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    activePath: PropTypes.string.isRequired
  };

  render () {
    return (
      <Navigation 
        isAuthenticated={this.props.isAuthenticated}
        activePath={this.props.activePath}
      />
    );
  }
}

const mapStateToProps = ({ isAuthenticated }) => ({
  isAuthenticated
});

export default connect(mapStateToProps)(NavigationContainer);
