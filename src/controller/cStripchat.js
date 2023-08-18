const { Stripchat } = require("../db.js");

const pst = async (cost) => {
  try {
    const rcost = [];
    for (const i of cost) {
      const [r, c] = await Stripchat.findOrCreate({
        where: {
          userName: i.user,
          tokens: i.tokens,
          dolares: i.dolares,
          mensual: false,
        },
      });
      if (c) {
        rcost.push(r);
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
return cost
} catch (error) {
throw new Error ("Error no hay registros para mostrar");
}
};

module.exports = {
  pst,
  gst,
};
