const { Location, User } = require("../../db.js");

const postLocation = async (locacions) => {
  console.log(locacions)
  const { ubicacion, porcentaje, inicial, meta, city, departamento, userId} = locacions;
  try {
    const user = await User.findByPk(userId);
    console.log(user)
    const newLocation = await Location.create({
      
        location: ubicacion,
        porcentaje: porcentaje,
        inicial: inicial,
        meta: meta,
        // city: city,
        // departament: departamento,
      
    });
    console.log(newLocation)
    if (user) {
      console.log(user)
      await newLocation.setP_u(user);
    }
    return newLocation[0];
  } catch (error) {
    throw new Error("Error no se puedo crear la ubicacion");
  }
};

const getAllLocation = async () => {
  try {
    const AllLocation = await Location.findAll();
    return AllLocation;
  } catch (error) {
    throw new Error("No hay registros para mostrar");
  }
};

const getLocationById = async (id) => {
  try {
    const locationById = await Location.findByPk(id);
    return locationById;
  } catch (error) {
    throw new Error("Error no se encontro registro con ese Id");
  }
};

const updateLocation = async (id, nLocation) => {
  try {
    const editLocation = await Location.findByPk(id);
    if (!editLocation) {
      return { error: "No se encontro la Ubicacion." };
    }
    await editLocation.update(nLocation);
    const updateLocation = await Location.findByPk(id);
    return updateLocation;
  } catch (error) {
    throw new Error("Error no pudimos actualizar la locacion.");
  }
};

const deleteLocation = async (id) => {
  try {
    const deleteLocation = await Location.findByPk(id);
    if (!deleteLocation) {
      return { error: "No se encontro la Locacion." };
    }
    await deleteLocation.destroy();
    return { mensaje: "La locacion fue eliminda correctamente." };
  } catch (error) {
    throw new Error("Error no pudimos eliminar la locacion");
  }
};

module.exports = {
  postLocation,
  getAllLocation,
  getLocationById,
  updateLocation,
  deleteLocation,
};
