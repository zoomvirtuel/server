const { IsLive } = require("../db.js");

const pil = async (ci) => {
  try {
    const ril = [];
    for (const i of ci) {
      const [r, c] = await IsLive.findOrCreate({
        where: {
          codigo: i.codigo,
          euros: i.euros,
          mensual: true,
        },
      });
      if (c) {
        ril.push(r);
      }
    }
    ril.sort((a, b) => {
      return a.codigo.localeCompare(b.codigo);
    });
    return ril;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

module.exports = {
  pil,
};
