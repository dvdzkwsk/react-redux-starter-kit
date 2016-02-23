import passport from 'koa-passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

export function setup(User, config) {
  passport.use(new FacebookStrategy({
    clientID: config.facebook.client_id,
    clientSecret: config.facebook.client_secret,
    callbackURL: config.facebook.callback_url,
    profileFields: [
      'displayName',
      'emails'
    ]
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({
      'facebook.id': profile.id
    })
      .then(user => {
        if (user) {
          return done(null, user);
        }

        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          provider: 'facebook',
          facebook: profile._json
        });

        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
