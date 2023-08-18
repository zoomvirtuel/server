const { Usuario } = require("../db.js");

const puser = async () => {
  try {
    const user = await Usuario.findOrCreate({
      where: {
        nombre,
        apellido,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Lo siento no pude procesar la solicitud " + error.message);
  }
};

const guser = async (id) => {
  try {
    const user = await Usuario.findAll(id);
    return user;
  } catch (error) {
    throw new Error("Lo siento no pude encontrar ese usuario");
  }
};

module.exports = {
  puser,
  guser,
};
