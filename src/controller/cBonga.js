const { Bonga } = require("../db.js");

const postBonga = async (corteBonga) => {
  try {
    const registroBonga = [];
    // Recorremos corteChat y guardamos cada objeto como un registro en la base de datos
    for (const i of corteBonga) {
      const [registros, created] = await Bonga.findOrCreate({
        where: {
          userName: i.user,
          fecha: i.fecha,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (created) {
        registroBonga.push(registros);
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    registroBonga.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return registroBonga;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};
const getAllBonga = async () => {
  try {
    const corteBonga = await Bonga.findAll();
    corteBonga.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return corteBonga;
  } catch (error) {
    throw new Error("Error al buscar los registros " + error.message);
  }
};

module.exports = {
  postBonga,
  getAllBonga,
};
