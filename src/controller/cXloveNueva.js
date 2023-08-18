const { XloveNueva } = require("../db.js");

const pxln = async (coxln) => {
  try {
    const rcoxln = [];
    for (const i of coxln) {
      const [r, c] = await XloveNueva.findOrCreate({
        where: {
          userName: i.user,
          fecha: i.fecha,
          euros: i.euros,
          mensual: false,
        },
      });
      if (c) {
        rcoxln.push(r);
      }
    }
    rcoxln.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoxln;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gxln = async () => {
  try {
    const coxln = await XloveNueva.findAll();
    coxln.sort((a, b) => a.userName.localeCompare(b.userName));
    return coxln;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

module.exports = {
  pxln,
  gxln,
};
