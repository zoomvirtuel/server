const { Xlove } = require("../db.js");

const pxl = async (coxl) => {
  try {
    const rcoxl = [];
    for (const i of coxl) {
      const [r, c] = await Xlove.findOrCreate({
        where: {
          userName: i.user,
          euros: i.euros,
          mensual: false,
        },
      });
      if (c) {
        rcoxl.push(r);
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
