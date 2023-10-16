require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_RENDER } = process.env;

// //! este sequelize es para local...

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/zoomvirtuel`,
  {
    logging: false,
    native: false,
  }
);

//! este sequelize es para RENDERIZADO... DEPLOY DB en render.s.

// const sequelize = new Sequelize(DB_RENDER, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: true, // Deshabilitar la conexión SSL/TLS
//   },
// });

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Adultwork,
  Amateur,
  Bonga,
  Cam4,
  Chaturbate,
  Dirty,
  IsLive,
  Sender,
  Skype,
  Stripchat,
  Vx,
  Xlove,
  XloveNueva,
  Paginas,
  User,
  UserName,
  Comentario,
  Moneda,
  Quincena,
  Porcentaje,
} = sequelize.models;

//? relation of userName and adultwork
UserName.hasMany(Adultwork, {as: 'corte', foreignKey: 'userId'});
Adultwork.belongsTo(UserName, {as: 'corte', foreignKey: 'userId'});

//? relation of fortnight nad money
Quincena.hasMany(Moneda, {as: 'monedas', foreignKey: 'quince'});
Moneda.belongsTo(Quincena, {as: 'monedas', foreignKey: 'quince'});

//? relation of user and userName
User.hasMany(UserName, { as: "useres", foreignKey: "newUser" });
UserName.belongsTo(User, { as: "useres", foreignKey: "newUser" });

//? relation of userName and pages
Paginas.hasMany(UserName, { as: "userNames", foreignKey: "pagina" });
UserName.belongsTo(Paginas, { as: "userNames", foreignKey: "pagina" });

//! ***********************************************// P A G I N A S \\*******************************

//? relation of fortnight and adultWork
Quincena.hasMany(Adultwork, {as: 'q_adult', foreignKey: 'quincena'});
Adultwork.belongsTo(Quincena, {as: 'q_adult', foreignKey: 'quincena'});

//? relation of fortnight and amateur
Quincena.hasMany(Amateur, {as: 'q_amateur', foreignKey: 'quincena'});
Amateur.belongsTo(Quincena, {as: 'q_aamateur', foreignKey: 'quincena'});

//? relation of fortnight and bonga
Quincena.hasMany(Bonga, {as: 'q_bonga', foreignKey: 'quincena'});
Bonga.belongsTo(Quincena, {as: 'q_bonga', foreignKey: 'quincena'});

//? relation of fortnight and cam4
Quincena.hasMany(Cam4, {as: 'q_cam4', foreignKey: 'quincena'});
Cam4.belongsTo(Quincena, {as: 'q_cam4', foreignKey: 'quincena'});

//? relation of fortnight and chaturbate
Quincena.hasMany(Chaturbate, {as: 'q_chaturbate', foreignKey: 'quincena'});
Chaturbate.belongsTo(Quincena, {as: 'q_chaturbate', foreignKey: 'quincena'});

//? relation of fortnight and Dirty
Quincena.hasMany(Dirty, {as: 'q_dirty', foreignKey: 'quincena'});
Dirty.belongsTo(Quincena, {as: 'q_dirty', foreignKey: 'quincena'});

//? relation of fortnight and Islive
Quincena.hasMany(IsLive, {as: 'q_islive', foreignKey: 'quincena'});
IsLive.belongsTo(Quincena, {as: 'q_islive', foreignKey: 'quincena'});

//? relation of fortnight and Sender
Quincena.hasMany(Sender, {as: 'q_sender', foreignKey: 'quincena'});
Sender.belongsTo(Quincena, {as: 'q_sender', foreignKey: 'quincena'});

//? relation of fortnight and Skype
Quincena.hasMany(Skype, {as: 'q_skype', foreignKey: 'quincena'});
Skype.belongsTo(Quincena, {as: 'q_skype', foreignKey: 'quincena'});

//? relation of fortnight and Stripchat
Quincena.hasMany(Stripchat, {as: 'q_stripchat', foreignKey: 'quincena'});
Stripchat.belongsTo(Quincena, {as: 'q_stripchat', foreignKey: 'quincena'});

//? relation of fortnight and Vx
Quincena.hasMany(Vx, {as: 'q_vx', foreignKey: 'quincena'});
Vx.belongsTo(Quincena, {as: 'q_vx', foreignKey: 'quincena'});

//? relation of fortnight and Xlove
Quincena.hasMany(Xlove, {as: 'q_xlove', foreignKey: 'quincena'});
Xlove.belongsTo(Quincena, {as: 'q_xlove', foreignKey: 'quincena'});

//? relation of fortnight and XloveNueva
Quincena.hasMany(XloveNueva, {as: 'q_xlovenueva', foreignKey: 'quincena'});
XloveNueva.belongsTo(Quincena, {as: 'q_xlovenueva', foreignKey: 'quincena'});
//! ***********************************************// P A G I N A S \\*******************************

//? relation of user and comments
User.hasMany(Comentario, { as: "comments", foreignKey: "userId" });
Comentario.belongsTo(User, { as: "comments", foreignKey: "userId" });

//? relation of user and percentage
User.hasOne(Porcentaje, {as: 'p_u', foreignKey: 'userId'});
Porcentaje.belongsTo(User, {as: 'p_u', foreignKey: 'userId'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
