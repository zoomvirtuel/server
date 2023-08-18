const { Adultwork } = require("../db.js");

const pad = async (coad) => {
  try {
    const rcoad = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const i of coad) {
      const [r, c] = await Adultwork.findOrCreate({
        where: {
          userName: i.user,
          fecha: i.fecha,
          creditos: i.creditos,
          parcial: i.parcial,
          mensual: false,
        },
      });
      if (c) {
        rcoad.push(r);
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rcoad.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoad;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gad = async () => {
  try {
    const coad = await Adultwork.findAll({ where: { parcial: false } });
    coad.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return coad;
  } catch (error) {
    throw new Error("Error al buscar los registros " + error.message);
  }
};

const ppad = async (copad) => {
  try {
    const rcopad = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const i of copad) {
      const [r, c] = await Adultwork.findOrCreate({
        where: {
          userName: i.user,
          creditos: i.creditos,
          parcial: i.parcial,
          mensual: false,
        },
      });
      if (c) {
        rcopad.push(r);
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rcopad.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcopad;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gpad = async () => {
  try {
    const copad = await Adultwork.findAll({ where: { parcial: true } });
    copad.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return copad;
  } catch (error) {
    throw new Error("Error al buscar los registros " + error.message);
  }
};

module.exports = {
  pad,
  gad,
  ppad,
  gpad,
};