const { Dirty } = require("../../db.js");

const pdi = async (codi) => {
  try {
    const rcodi = [];
    for (const i of codi) {
      const [r, c] = await Dirty.findOrCreate({
        where: {
          userName: i.user,
          // tokens: i.tokens,
          plata: i.plata,
          moneda: i.moneda,
          mensual: true,
        },
      });
      if (c) {
        rcodi.push(r);
      }
    }
    rcodi.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcodi;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gdi = async () => {
  try {
    const codi = await Dirty.findAll();
    codi.sort((a, b) => a.userName.localeCompare(b.userName));
    return codi;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  pdi,
  gdi,
};
