import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

export default async function seed () {
  await Thing.find({}).remove();

  await Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Webpack, Babel, Karma, ' +
          'Mocha, ESLint, and Redux Devtools.'
  }, {
    name: 'Server and Client integration',
    info: 'Built with a powerful and fun stack: MongoDB, Koa, ' +
           'React, and Node.'
  });

  await User.find({}).remove();

  await User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@example.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@example.com',
    password: 'admin'
  });

  console.log('done populating database');
}
