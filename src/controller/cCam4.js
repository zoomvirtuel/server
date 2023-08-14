const { Cam4 } = require("../db.js");

const pca = async (coca) => {
  try {
    const rcoca = [];
    for (const i of coca) {
      const [r, c] = await Cam4.findOrCreate({
        where: {
          userName: i.user,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (c) {
        rcoca.push(r);
      }
    }
    rcoca.sort((a, b) => {
      return a.localeCompare(b.userName);
    });
    return rcoca;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

module.exports = {
  pca,
};
