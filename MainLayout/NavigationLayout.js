import React, { PropTypes } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { navRoutes } from 'routes/index';
import { actions as authActions } from 'redux/modules/auth';
import { fetchLeadSourceTypes } from 'redux/modules/leadSourceTypes';
import NotificationContainer from 'containers/NotificationContainer';
import LogoSpinner from 'components/LogoSpinner';
import Icon from 'components/Icon';

const propTypes = {
  children: PropTypes.element,
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  globalFetch: PropTypes.bool.isRequired
};

class NavLayout extends Component {
  componentWillMount () {
    // this will need to be moved if I ever have routes without nav
    this.props.dispatch(authActions.initAuth());
    this.props.dispatch(fetchLeadSourceTypes());
  }

  renderLinks (type) {
    let links = [];

    navRoutes[type].map((route, i) => {
      let icon;
      if (route.fa) {
        icon = <Icon is={route.fa} />;
      }

      links.push(
        <LinkContainer key={i} to={route.to}>
          <NavItem eventKey={route.to}>
            {icon}
            {route.msg}
          </NavItem>
        </LinkContainer>
      );
    });
    return links;
  }

  renderSignOut () {
    const { dispatch } = this.props;
    return (
      <NavItem
        key='signout'
        eventKey='signout'
        onClick={() => dispatch(authActions.signOut())}
      >
        <Icon is='sign-out' />
        Sign Out
      </NavItem>
    );
  }

  render () {
    const { children, isAuthenticated, globalFetch } = this.props;
    const rightLinks = isAuthenticated
      ? this.renderLinks('authenticated') : this.renderLinks('notAuthenticated');

    return (
      <div>
        <ReactCSSTransitionGroup transitionName='example' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {globalFetch && <LogoSpinner color='white' />}
        </ReactCSSTransitionGroup>
        <Navbar inverse fluid className='site-nav'>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to='/'>
                <a>Kira</a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.renderLinks('shared')}
            </Nav>

            <Nav pullRight>
              {rightLinks}
              {isAuthenticated && this.renderSignOut()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <NotificationContainer />

        {children}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    globalFetch:
      state.auth.isFetching ||
      state.user.isFetching ||
      state.leadSource.isFetching ||
      state.touches.isFetching ||
      state.leads.isFetching
  };
}

NavLayout.propTypes = propTypes;
export default connect(mapStateToProps)(NavLayout);
