import passport from 'koa-passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';

export function setup(User, config) {
  passport.use(new TwitterStrategy({
    consumerKey: config.twitter.client_id,
    consumerSecret: config.twitter.client_secret,
    callbackURL: config.twitter.callback_url,
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({
      'twitter.id_str': profile.id
    })
      .then(user => {
        if (user) {
          return done(null, user);
        }

        user = new User({
          name: profile.displayName,
          username: profile.username,
          role: 'user',
          provider: 'twitter',
          twitter: profile._json
        });
        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
