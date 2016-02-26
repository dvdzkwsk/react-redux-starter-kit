import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

export default async function seed () {
  await Thing.find({}).remove();

  await Thing.create({
    name: 'React'
  }, {
    name: 'Redux'
  }, {
    name: 'Webpack'
  }, {
    name: 'Koa'
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
