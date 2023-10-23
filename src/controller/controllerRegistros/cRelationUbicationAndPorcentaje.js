const { User, Porcentaje, Ubicacion } = require("../../db.js");

const relationUbicationAndPorcentaje = async ({
  porcentaje,
  ubicacion,
  user,
}) => {
  try {
    console.log(porcentaje);
    console.log(ubicacion);
    console.log(user);
    const rUser = await User.findByPk(user);
    console.log(user);
    if (!rUser) {
      console.log("user");
      throw Error("Usuario no encontrado");
    }
    const rUbicacion = await Ubicacion.findByPk(ubicacion);
    console.log(ubicacion);
    if (!rUbicacion) {
      console.log("ubicacion");
      throw Error("Ubicacion no encontrada");
    }
    const rPorcentaje = await Porcentaje.findByPk(porcentaje);
    console.log(porcentaje);
    if (!rPorcentaje) {
      console.log("porcentaje");
      throw Error("Porcentaje no encontrado");
    }

    await rUser.setP_porcentaje(rPorcentaje);
    console.log(rUser);
    await rUser.setP_ubicacion(rUbicacion);
    console.log(rUser);

    return rUser;
  } catch (error) {
    console.log(error.message);
    throw new Error("No fue posible hacer las relaciones");
  }
};

module.exports = {
  relationUbicationAndPorcentaje,
};
