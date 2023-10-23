const { Cam4, UserName, Quincena } = require("../../db.js");

const pca = async (coca) => {
  // console.log(coca)
  try {
    const rcoca = [];
    for (const i of coca) {
      // console.log(i)
      try {
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const userId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
      const [r, c] = await Cam4.findOrCreate({
        where: {
          userName: i.user,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (c) {
        await r.setCorte_cam4(userId);
        await r.setQ_cam4(quincena);
        rcoca.push(r)
      }
    } catch (error) {
      console.error("Error en una iteración del bucle:", error);
      // Continuar con la próxima iteración
    }
    }
    // console.log(rcoca)
    rcoca.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoca;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gca = async () => {
  try {
    const coca = await Cam4.findAll();
    coca.sort((a, b) => a.userName.localeCompare(b.userName));
    return coca;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  pca,
  gca,
};
