const { Chaturbate } = require("../db.js");

const pch = async (coch) => {
  try {
    const rcoch = [];
    // Recorremos corteChat y guardamos cada objeto como un registro en la base de datos
    for (const i of coch) {
      const [r, c] = await Chaturbate.findOrCreate({
        where: {
          userName: i.user,
          tokens: i.tokens,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (c) {
        rcoch.push(r);
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rcoch.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoch;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gch = async () => {
  try {
    const coch = await Chaturbate.findAll();
    coch.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    })
    return coch;
  } catch (error) {
    throw new Error ('Error al buscar los registros ' + error.message);
  }
};

module.exports = {
  pch,
  gch,
};
