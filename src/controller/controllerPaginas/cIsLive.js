const { IsLive } = require("../../db.js");

const pil = async (coil) => {
  try {
    const rcoil = [];
    for (const i of coil) {
      const [r, c] = await IsLive.findOrCreate({
        where: {
          codigo: i.codigo,
          euros: i.euros,
          mensual: true,
        },
      });
      if (c) {
        rcoil.push(r);
      }
    }
    rcoil.sort((a, b) => {
      return a.codigo.localeCompare(b.codigo);
    });
    return rcoil;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gil = async () => {
  try {
    const coil = await IsLive.findAll();
    coil.sort((a, b) => a.codigo.localeCompare(b.codigo));
    return coil;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  pil,
  gil,
};
