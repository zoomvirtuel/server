const { Stripchat, UserName, Quincena } = require("../../db.js");

const pst = async (cost) => {
  try {
    const rcost = [];
    for (const i of cost) {
      try {
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const userNameId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
        console.log(userNameId);
        console.log(quincena);
        console.log(cost);
        const r = await Stripchat.create({
          userName: i.user,
          tokens: i.tokens,
          dolares: i.dolares,
          mensual: false,
        });
        console.log(r);
        if (r) {
          await r.setCorte_stripchat(userNameId);
          await r.setQ_stripchat(quincena);
          rcost.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    rcost.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcost;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gst = async () => {
  try {
    const cost = await Stripchat.findAll();
    cost.sort((a, b) => a.userName.localeCompare(b.userName));
    return cost;
  } catch (error) {
    throw new Error("Error no hay registros para mostrar");
  }
};

module.exports = {
  pst,
  gst,
};
