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
  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    paginas paginas     ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  Adultwork,
  Amateur,
  Bonga,
  Cam4,
  Chaturbate,
  Dirty,
  IsLive,
  Mondo,
  MyFreeCams,
  Sakura,
  Sender,
  Skype,
  Streamate,
  StreamRay,
  Stripchat,
  Vx,
  Xlove,
  XloveNueva,
  //? ↑↑↑↑↑↑↑↑↑↑↑↑    paginas paginas   ↑↑↑↑↑↑↑↑↑↑↑↑

  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    nombre de paginas   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  Paginas,
  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    usuarios    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  User,
  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓   userNames    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  UserName,
  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    comentarios     ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  Comentario,
  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓     moneda    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  Moneda,
  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    quincena     ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  Quincena,
  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓     porcentajes    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  Porcentaje,
  //? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓    ubicacion    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  Ubicacion,
} = sequelize.models;

//? relation of fortnight nad money
Quincena.hasMany(Moneda, { as: "monedas", foreignKey: "quince" });
Moneda.belongsTo(Quincena, { as: "monedas", foreignKey: "quince" });

//? relation of user and userName
User.hasMany(UserName, { as: "useres", foreignKey: "newUser" });
UserName.belongsTo(User, { as: "useres", foreignKey: "newUser" });

//? relation of userName and pages
Paginas.hasMany(UserName, { as: "userNames", foreignKey: "pagina" });
UserName.belongsTo(Paginas, { as: "userNames", foreignKey: "pagina" });

//! ***********************************************// P A G I N A S \\*******************************

//? ********************// A D U L T W O R K \\  ********************
//? relation of fortnight and adultWork
Quincena.hasMany(Adultwork, { as: "q_adult", foreignKey: "quincena" });
Adultwork.belongsTo(Quincena, { as: "q_adult", foreignKey: "quincena" });
//? relation of userName and adultwork
UserName.hasMany(Adultwork, { as: "corte_adult", foreignKey: "userId" });
Adultwork.belongsTo(UserName, { as: "corte_adult", foreignKey: "userId" });

//? ********************// A M A T E U R \\  ********************
//? relation of fortnight and amateur
Quincena.hasMany(Amateur, { as: "q_amateur", foreignKey: "quincena" });
Amateur.belongsTo(Quincena, { as: "q_amateur", foreignKey: "quincena" });
//? relation of userName and amateur
UserName.hasMany(Amateur, { as: "corte_amateur", foreignKey: "userId" });
Amateur.belongsTo(UserName, { as: "corte_amateur", foreignKey: "userId" });

//? ********************// B O N G A \\  ********************
//? relation of fortnight and bonga
Quincena.hasMany(Bonga, { as: "q_bonga", foreignKey: "quincena" });
Bonga.belongsTo(Quincena, { as: "q_bonga", foreignKey: "quincena" });
//? relation of userName and bonga
UserName.hasMany(Bonga, { as: "corte_bonga", foreignKey: "userId" });
Bonga.belongsTo(UserName, { as: "corte_bonga", foreignKey: "userId" });

//? ********************// C A M 4 \\  ********************
//? relation of fortnight and cam4
Quincena.hasMany(Cam4, { as: "q_cam4", foreignKey: "quincena" });
Cam4.belongsTo(Quincena, { as: "q_cam4", foreignKey: "quincena" });
//? relation of userName and cam4
UserName.hasMany(Cam4, { as: "corte_cam4", foreignKey: "userId" });
Cam4.belongsTo(UserName, { as: "corte_cam4", foreignKey: "userId" });

//? ********************// C H A T U R B A T E \\  ********************
//? relation of fortnight and chaturbate
Quincena.hasMany(Chaturbate, { as: "q_chaturbate", foreignKey: "quincena" });
Chaturbate.belongsTo(Quincena, { as: "q_chaturbate", foreignKey: "quincena" });
//? relation of userName and chaturbate
UserName.hasMany(Chaturbate, { as: "corte_chaturbate", foreignKey: "userId" });
Chaturbate.belongsTo(UserName, {
  as: "corte_chaturbate",
  foreignKey: "userId",
});

//? ********************// D I R T Y \\  ********************
//? relation of fortnight and Dirty
Quincena.hasMany(Dirty, { as: "q_dirty", foreignKey: "quincena" });
Dirty.belongsTo(Quincena, { as: "q_dirty", foreignKey: "quincena" });
//? relation of userName and Dirty
UserName.hasMany(Dirty, { as: "corte_dirty", foreignKey: "userId" });
Dirty.belongsTo(UserName, { as: "corte_dirty", foreignKey: "userId" });

//? ********************// I S L I V E \\  ********************
//? relation of fortnight and Islive
Quincena.hasMany(IsLive, { as: "q_isLive", foreignKey: "quincena" });
IsLive.belongsTo(Quincena, { as: "q_isLive", foreignKey: "quincena" });
//? relation of userName and Islive
UserName.hasMany(IsLive, { as: "corte_isLive", foreignKey: "userId" });
IsLive.belongsTo(UserName, { as: "corte_isLive", foreignKey: "userId" });

//? ********************// M O N D O \\  ********************
//? relation of fortnight and MONDO
Quincena.hasMany(Mondo, { as: "q_mondo", foreignKey: "quincena" });
Mondo.belongsTo(Quincena, { as: "q_mondo", foreignKey: "quincena" });
//? relation of userName and MONDO
UserName.hasMany(Mondo, { as: "corte_mondo", foreignKey: "userId" });
Mondo.belongsTo(UserName, { as: "corte_mondo", foreignKey: "userId" });

//? ********************// M Y F R E E C A M S \\  ********************
//? relation of fortnight and MYFREECAMS
Quincena.hasMany(MyFreeCams, { as: "q_myfreecams", foreignKey: "quincena" });
MyFreeCams.belongsTo(Quincena, { as: "q_myfreecams", foreignKey: "quincena" });
//? relation of userName and MYFREECAMS
UserName.hasMany(MyFreeCams, { as: "corte_myfreecams", foreignKey: "userId" });
MyFreeCams.belongsTo(UserName, {
  as: "corte_myfreecams",
  foreignKey: "userId",
});

//? ********************// S A K U R A \\  ********************
//? relation of fortnight and Sakura
Quincena.hasMany(Sakura, { as: "q_sakura", foreignKey: "quincena" });
Sakura.belongsTo(Quincena, { as: "q_sakura", foreignKey: "quincena" });
//? relation of userName and Sakura
UserName.hasMany(Sakura, { as: "corte_sakura", foreignKey: "userId" });
Sakura.belongsTo(UserName, { as: "corte_sakura", foreignKey: "userId" });

//? ********************// S E N D E R \\  ********************
//? relation of fortnight and Sender
Quincena.hasMany(Sender, { as: "q_sender", foreignKey: "quincena" });
Sender.belongsTo(Quincena, { as: "q_sender", foreignKey: "quincena" });
//? relation of userName and Sender
UserName.hasMany(Sender, { as: "corte_sender", foreignKey: "userId" });
Sender.belongsTo(UserName, { as: "corte_sender", foreignKey: "userId" });

//? ********************// S K Y P E \\  ********************
//? relation of fortnight and Skype
Quincena.hasMany(Skype, { as: "q_skype", foreignKey: "quincena" });
Skype.belongsTo(Quincena, { as: "q_skype", foreignKey: "quincena" });
//? relation of userName and Skype
UserName.hasMany(Skype, { as: "corte_skype", foreignKey: "userId" });
Skype.belongsTo(UserName, { as: "corte_skype", foreignKey: "userId" });

//? ********************// S T R E A M A T E \\  ********************
//? relation of fortnight and Skype
Quincena.hasMany(Streamate, { as: "q_streamate", foreignKey: "quincena" });
Streamate.belongsTo(Quincena, { as: "q_streamate", foreignKey: "quincena" });
//? relation of userName and Skype
UserName.hasMany(Streamate, { as: "corte_streamate", foreignKey: "userId" });
Streamate.belongsTo(UserName, { as: "corte_streamate", foreignKey: "userId" });

//? ********************// S T R E A M R A Y \\  ********************
//? relation of fortnight and Skype
Quincena.hasMany(StreamRay, { as: "q_streamRay", foreignKey: "quincena" });
StreamRay.belongsTo(Quincena, { as: "q_streamRay", foreignKey: "quincena" });
//? relation of userName and Skype
UserName.hasMany(StreamRay, { as: "corte_streamRay", foreignKey: "userId" });
StreamRay.belongsTo(UserName, { as: "corte_streamRay", foreignKey: "userId" });

//? ********************//  S T R I P C H A T \\  ********************
//? relation of fortnight and Stripchat
Quincena.hasMany(Stripchat, { as: "q_stripchat", foreignKey: "quincena" });
Stripchat.belongsTo(Quincena, { as: "q_stripchat", foreignKey: "quincena" });
//? relation of userName and Stripchat
UserName.hasMany(Stripchat, { as: "corte_stripchat", foreignKey: "userId" });
Stripchat.belongsTo(UserName, { as: "corte_stripchat", foreignKey: "userId" });

//? ********************// V X  \\  ********************
//? relation of fortnight and Vx
Quincena.hasMany(Vx, { as: "q_vx", foreignKey: "quincena" });
Vx.belongsTo(Quincena, { as: "q_vx", foreignKey: "quincena" });
//? relation of userName and Vx
UserName.hasMany(Vx, { as: "corte_vx", foreignKey: "userId" });
Vx.belongsTo(UserName, { as: "corte_vx", foreignKey: "userId" });

//? ********************// X L O V E \\  ********************
//? relation of fortnight and Xlove
Quincena.hasMany(Xlove, { as: "q_xlove", foreignKey: "quincena" });
Xlove.belongsTo(Quincena, { as: "q_xlove", foreignKey: "quincena" });
//? relation of userName and Xlove
UserName.hasMany(Xlove, { as: "corte_xlove", foreignKey: "userId" });
Xlove.belongsTo(UserName, { as: "corte_xlove", foreignKey: "userId" });

//? ********************// X L O V E  N U E V A \\  ********************
//? relation of fortnight and XloveNueva
Quincena.hasMany(XloveNueva, { as: "q_xloveNueva", foreignKey: "quincena" });
XloveNueva.belongsTo(Quincena, { as: "q_xloveNueva", foreignKey: "quincena" });
//? relation of userName and XloveNueva
UserName.hasMany(XloveNueva, { as: "corte_xloveNueva", foreignKey: "userId" });
XloveNueva.belongsTo(UserName, {
  as: "corte_xloveNueva",
  foreignKey: "userId",
});

//! ***********************************************// P A G I N A S \\*******************************

//? relation of user and comments
User.hasMany(Comentario, { as: "comments", foreignKey: "userId" });
Comentario.belongsTo(User, { as: "comments", foreignKey: "userId" });

//? relation of user and percentage
User.belongsTo(Porcentaje, { as: "p_porcentaje", foreignKey: "porcentajeId" });
Porcentaje.belongsTo(User, { as: "p_porcentaje", foreignKey: "porcentajeId" });

//? relation of user and Ubicacion
User.belongsTo(Ubicacion, { as: "p_ubicacion", foreignKey: "ubicacionId" });
Ubicacion.belongsTo(User, { as: "p_ubicacion", foreignKey: "ubicacionId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
