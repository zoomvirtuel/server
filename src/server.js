const express = require("express");
require("dotenv").config();
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const passport = require("passport");
const server = express();


require("./auth.js");

server.use(
  cors(
    {
      // origin: process.env.FRONT_URL,
      origin: 'https://zoomvirtuel.netlify.app',
  }
  )
  );
  server.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );

    server.use(passport.initialize());
    server.use(passport.session());
    

      server.use(express.json());
      server.use(morgan("dev"));
      server.use(helmet());
      
      server.use(router);
      
module.exports = server;
