const { Sender } = require("../db.js");

const ps = async (cs) => {
  try {
    const rs = [];
    for (const i of cs) {
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
        rs.push(r);
      }
    }
    rs.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rs;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gas = async () => {
  try {
    const cs = await Sender.findAll();
    cs.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return cs;
  } catch (error) {
    throw new Error("Error al buscar los registros. " + error.message);
  }
};

module.exports = {
  ps,
  gas,
};
