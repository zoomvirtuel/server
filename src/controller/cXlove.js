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

module.exports = {
  pxl,
};
