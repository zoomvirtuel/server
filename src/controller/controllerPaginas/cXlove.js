const { Xlove, UserName, Quincena } = require("../../db.js");

const pxl = async (coxl) => {
  try {
    console.log(coxl);
    const rcoxl = [];
    for (const i of coxl) {
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
        const r = await Xlove.create({
          userName: i.user,
          euros: i.euros,
          mensual: false,
        });
        console.log(userId);
        console.log(quincena);
        console.log(r);
        if (r) {
          await r.setCorte_xlove(userId);
          await r.setQ_xlove(quincena);
          console.log(r);
          rcoxl.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcoxl.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoxl;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gxl = async () => {
  try {
    const coxl = await Xlove.findAll();
    coxl.sort((a, b) => a.userName.localeCompare(b.userName));
    return coxl;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

module.exports = {
  pxl,
  gxl,
};
