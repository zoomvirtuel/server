const { Amateur } = require("../db.js");

const pam = async (coam) => {
  try {
    const rcoam = [];
    for (const i of coam) {
      const [r, c] = await Amateur.findOrCreate({
        where: {
          userName: i.user,
          tokens: i.tokens,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (c) {
        rcoam.push(r);
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
