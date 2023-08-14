const { Amateur } = require("../db.js");

const pam = async (ncoam) => {
  try {
    const rcoam = [];
    for (const i of ncoam) {
      const [r, c] = await Amateur.findOrCreate({
        where: {
          userName: i.user,
          tokens: i.tokens,
          dolares: i.dolares,
          mensual: false,
        }
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

module.exports = {
  pam,
};
