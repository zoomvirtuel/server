const { Skype } = require("../db.js");

const psk = async (cosk) => {
  try {
    const rcosk = [];
    for (const i of cosk) {
      const [r, c] = await Skype.findOrCreate({
        where: {
          userName: i.user,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (c) {
        rcosk.push(r);
      }
    }
    rcosk.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcosk;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

module.exports = {
  psk,
};
