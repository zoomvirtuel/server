require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_RENDER } = process.env;

// //! este sequelize es para local...

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/zoomvirtuel`,
//   {
//     logging: false,
//     native: false,
//   }
// );

//! este sequelize es para RENDERIZADO... DEPLOY DB en render.s.

const sequelize = new Sequelize(DB_RENDER, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: true, // Deshabilitar la conexión SSL/TLS
  },
});

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
  Paginas,
  Sender,
  Skype,
  Stripchat,
  User,
  UserName,
  Vx,
  Xlove,
  XloveNueva,
  Comentario,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// User.belongsToMany(Paginas, { through: "User_id", as: "pag" });
// Paginas.belongsToMany(User, { through: "User_id", as: "pag" });

User.hasMany(UserName, { as: "useres", foreignKey: "newUser" });
UserName.belongsTo(User, { as: "useres", foreignKey: "newUser" });

Paginas.hasMany(UserName, { as: "userNames", foreignKey: "pagina" });
UserName.belongsTo(Paginas, { as: "userNames", foreignKey: "pagina" });

User.hasMany(Comentario, { as: "comments", foreignKey: "userId" });
Comentario.belongsTo(User, { as: "comments", foreignKey: "userId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
