const { Dirty, UserName, Quincena } = require("../../db.js");

const pdi = async (codi) => {
  console.log(codi)
  try {
    const rcodi = [];
    for (const i of codi) {
      try {
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const userId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
        const [r, c] = await Dirty.findOrCreate({
        where: {
          userName: i.user,
          plata: i.plata,
          moneda: i.moneda,
          mensual: true,
        },
      });
      if (c) {
        await r.setCorte_dirty(userId);
        await r.setQ_dirty(quincena);
        console.log(r)
        rcodi.push(r);
      }
      } catch (error) {
        throw new Error("Error al guardar los registros: " + error.message);
      }
      
    }
    rcodi.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcodi;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gdi = async () => {
  try {
    const codi = await Dirty.findAll();
    codi.sort((a, b) => a.userName.localeCompare(b.userName));
    return codi;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  pdi,
  gdi,
};
