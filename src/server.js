const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require('helmet');


const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(helmet());

server.use(router);


module.exports = server;

