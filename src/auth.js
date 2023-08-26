const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
require("dotenv").config();
const { getUserById } = require('./controller/cUser.js')

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async (_, __, profile, done) => {
      const account = profile._json;
      try {
        done(null, account)
      } catch (error) {
        done(error)
      }      
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.sub);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUserById(id); // Implementa la función para obtener el usuario por su ID
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
