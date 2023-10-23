const { Bonga, UserName, Quincena } = require("../../db.js");

const pbo = async (cobo) => {
  try {
    const rcobo = [];
    // Recorremos corteChat y guardamos cada objeto como un registro en la base de datos
    for (const i of cobo) {
      try {
        const userId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        console.log(quincena)
        const [r, c] = await Bonga.findOrCreate({
          where: {
            fecha: i.fecha,
          },
          defaults: {
            userName: i.user,
            dolares: i.dolares,
            mensual: false,
          },
        });
        
        console.log(userId)
        if (c) {
          console.log(r)
          await r.setCorte_bonga(userId); // Establecer la relación con UserName
          await r.setQ_bonga(quincena); // Establecer la relación con Quincena
          console.log(r)
          rcobo.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
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
