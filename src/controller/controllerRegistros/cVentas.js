const { Ventas } = require("../../db.js");

const postVentas = async (venta) => {
  try {
    const nVenta = await Ventas.create(venta);
    return nVenta;
  } catch (error) {
    throw new Error("Lo sentimos no pudimos crear la venta");
  }
};

const getAllVentas = async () => {
  try {
    const allVentas = await Ventas.findAll();
    allVentas.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    return allVentas;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const getVentaById = async (id) => {
  try {
    const getVenta = await Ventas.findByPk(id);
    return getVenta;
  } catch (error) {
    throw Error("Error no se encontro la venta.");
  }
};

const updateVentas = async (id, nVenta) => {
  try {
    const editVenta = await Ventas.findByPk(id);
    if (!editVenta) {
      return { error: "no se encontro la venta." };
    }
    await Ventas.update(nVenta);
    const updateVentas = await Ventas.findByPk(id);
    return updateVentas;
  } catch (error) {
    throw new Error("Error no pudimos actualizar la venta.");
  }
};

const deleteVenta = async (id) => {
  try {
    const deleteVenta = await Ventas.findByPk(id);
    if (!deleteVenta) {
      return { error: "Lo sentimos no encontramos la venta." };
    }
    await deleteVenta.destroy();
    return { mensaje: "La venta fue eliminada correctamente" };
  } catch (error) {
    throw Error("Error no se puedo eliminar la venta.");
  }
};

module.exports = {
  postVentas,
  getAllVentas,
  getVentaById,
  updateVentas,
  deleteVenta,
};
