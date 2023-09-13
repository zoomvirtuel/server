const { Bonga } = require("../../db.js");

const pbo = async (cobo) => {
  try {
    const rcobo = [];
    // Recorremos corteChat y guardamos cada objeto como un registro en la base de datos
    for (const i of cobo) {
      const [r, c] = await Bonga.findOrCreate({
        where: {
          userName: i.user,
          fecha: i.fecha,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (c) {
        rcobo.push(r);
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rcobo.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcobo;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};
const gbo = async () => {
  try {
    const cobo = await Bonga.findAll();
    cobo.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return cobo;
  } catch (error) {
    throw new Error("Error al buscar los registros " + error.message);
  }
};

module.exports = {
  pbo,
  gbo,
};
