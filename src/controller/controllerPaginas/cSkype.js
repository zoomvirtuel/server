const { Skype } = require("../../db.js");

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

const gsk = async () => {
  try {
    const cosk = await Skype.findAll();
    cosk.sort((a, b) => a.userName.localeCompare(b.userName));
    return cosk;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  psk,
  gsk,
};
