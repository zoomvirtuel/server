const { Moneda, Quincena } = require("../../db.js");

const postMoneda = async (moneda) => {
  try {
    const { edolar, eeuro, elibra, pdolar, peuro, plibra, quincena } = moneda;
    const quince = await Quincena.findByPk(quincena);
    const nMoneda = await Moneda.create({
      edolar,
      eeuro,
      elibra,
      pdolar,
      peuro,
      plibra,
    });
    console.log(quince);
    console.log(nMoneda);
    await nMoneda.setMonedas(quince);
    console.log(nMoneda);
    return nMoneda;
  } catch (error) {
    throw new Error("No fue posible guardar las monedas");
  }
};

const getAllMoneda = async () => {
  try {
    const monedas = await Moneda.findAll();
    return monedas;
  } catch (error) {
    throw new Error("No hay registros para mostrar");
  }
};

module.exports = {
  postMoneda,
  getAllMoneda,
};
