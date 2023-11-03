const { Amateur, UserName, Quincena } = require("../../db.js");

const pam = async (coam) => {
  try {
    const rcoam = [];
    for (const i of coam) {
      try {
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const userNameId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
        const r = await Amateur.create({
          tokens: i.tokens,
          userName: i.user,
          dolares: i.dolares,
          mensual: false,
        });
        // console.log(c);
        // console.log(r);
        if (r) {
          // console.log(r);
          await r.setCorte_amateur(userNameId);
          await r.setQ_amateur(quincena);
          console.log(r);
          // rcoam.push(r);
          // console.log(rcoam);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcoam.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoam;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gam = async () => {
  try {
    const coam = await Amateur.findAll();
    coam.sort((a, b) => a.userName.localeCompare(b.userName));
    return coam;
  } catch (error) {
    throw new Error("Error No hay registros para mostrar");
  }
};

module.exports = {
  pam,
  gam,
};
