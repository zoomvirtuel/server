const { Vx } = require("../db.js");

const pvx = async (covx) => {
  try {
    const rcovx = [];
    for (const i of covx) {
      const [r, c] = await Vx.findOrCreate({
        where: {
          userName: i.user,
          euros: i.euros,
          mensual: false,
        },
      });
      if (c) {
        rcovx.push(r);
      }
    }
    rcovx.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcovx;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gvx = async () => {
  try {
    const covx = await Vx.findAll();
    covx.sort((a, b) => a.userName.localeCompare(b.userName));
    return covx;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

module.exports = {
  pvx,
  gvx,
};
