import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Navigation = ({ activePath }) => {
  const routes = [{
    path: '/',
    name: 'Home'
  }, {
    path: '/things',
    name: 'Things'
  }, {
    path: '/settings',
    name: 'Settings'
  }, {
    path: '/signup',
    name: 'Signup'
  }, {
    path: '/login',
    name: 'Login'
  }];

  return (
    <div
      style={{ marginTop: '10px' }}
      className='container text-center'>
      <div className='btn-group'>
        {routes.map(({ name, path }) => {
          const className = activePath === path ? 'success' : 'default';

          return (
            <Link
              className={`btn btn-${className}`}
              key={path}
              to={path}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

Navigation.propTypes = {
  activePath: PropTypes.string.isRequired,
};

export default Navigation;
