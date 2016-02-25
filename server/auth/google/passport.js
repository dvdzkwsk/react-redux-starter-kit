import passport from 'koa-passport'
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'

export function setup (User, config) {
  passport.use(new GoogleStrategy({
    clientID: config.google.client_id,
    clientSecret: config.google.client_secret,
    callbackURL: config.google.callback_url,
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOne({
      'google.id': profile.id
    })
      .then(user => {
        if (user) {
          return done(null, user)
        }

        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          username: profile.emails[0].value.split('@')[0],
          provider: 'google',
          google: profile._json
        })
        user.save()
          .then(user => done(null, user))
          .catch(err => done(err))
      })
      .catch(err => done(err))
  }))
}
