import app from './';
import mongoose from 'mongoose';

after(function(done) {
  app.angularFullstack.on('close', () => done());
  mongoose.connection.close();
  app.angularFullstack.close();
});
