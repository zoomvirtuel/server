const { Sender } = require("../../db.js");

const pse = async (cose) => {
  try {
    const rcose = [];
    for (const i of cose) {
      const [r, c] = await Sender.findOrCreate({
        where: {
          userName: i.user,
          fecha: i.fecha,
          coins: i.coins,
          euros: i.euros,
          mensual: true,
        },
      });
      if (c) {
        rcose.push(r);
      }
    }
    rcose.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcose;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gse = async () => {
  try {
    const cose = await Sender.findAll();
    cose.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return cose;
  } catch (error) {
    throw new Error("Error al buscar los registros. " + error.message);
  }
};

module.exports = {
  pse,
  gse,
};
