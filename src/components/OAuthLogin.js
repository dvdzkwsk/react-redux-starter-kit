import React, { PropTypes } from 'react';

const OAuthLogin = () => {
  const OAuths = [{
    provider: 'Facebook',
    icon: 'fa-facebook',
    path: '/auth/facebook'
  }, {
    provider: 'Google',
    icon: 'fa-google',
    path: '/auth/google'
  }];

  return (
    <div className='container text-center'>
      <div className='btn-group'>
        {routes.map(({ provider, icon, path }) => (
          <a
            className={`btn btn-${className}`}
            key={provider}
            href={path}>
            {provider}
          </Link>
        ))}
      </div>
    </div>
   );
};
