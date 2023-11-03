const { Sakura, UserName, Quincena } = require("../../db.js");

const postSakura = async (sakura) => {
  try {
    const rSakura = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const i of sakura) {
      try {
        const userNameId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const r = await Sakura.create({
          userName: i.user,
          dolares: i.dolares,
          tokens: i.tokens,
          mensual: false,
        });
        if (r) {
          await r.setCorte_sakura(userNameId);
          await r.setQ_sakura(quincena);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rSakura.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rSakura;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

module.exports = {
  postSakura,
};
