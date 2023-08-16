const { Cam4 } = require("../db.js");

const pca = async (coca) => {
  // console.log(coca)
  try {
    const rcoca = [];
    for (const i of coca) {
      // console.log(i)
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
    // console.log(rcoca)
    rcoca.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoca;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

module.exports = {
  pca,
};
