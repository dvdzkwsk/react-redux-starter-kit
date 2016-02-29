import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Navigation = ({ activePath, isAuthenticated }) => {
  const publicRoutes = [{
    path: '/',
    name: 'Home'
  }, {
    path: '/things',
    name: 'Things'
  }];
  
  const privateRoutes = [{
    path: '/settings',
    name: 'Settings',
    isAuthenticated: true
  }, {
    path: '/signup',
    name: 'Signup',
    isAuthenticated: false
  }, {
    path: '/login',
    name: 'Login',
    isAuthenticated: false
  }];

  return (
    <div
      style={{ marginTop: '10px' }}
      className='container text-center'>
      <div className='btn-group'>

        {publicRoutes.map(({ name, path }) => {
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

        {privateRoutes
          .filter((route) => route.isAuthenticated === isAuthenticated)
          .map(({ name, path }) => {
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
  isAuthenticated: PropTypes.bool.isRequired
};

export default Navigation;
