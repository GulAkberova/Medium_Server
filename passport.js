const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID="331461137235-r7fvb1ns143gh146retn02t7i1plmeq2.apps.googleusercontent.com"

const GOOGLE_CLIENT_SECRET="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"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
     
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})