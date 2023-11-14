const { Prestamos, Quincena } = require("../../db.js");

const postPrestamos = async ({prestamo, userId, quincenaId}) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id: quincenaId },
    });
    console.log(quincena)
    const newPrestamo = await Prestamos.create({cantidad: prestamo, userId});
console.log(newPrestamo)
    newPrestamo.setQ_prestamos(quincena);
    return newPrestamo;
  } catch (error) {
    console.log(error)
    throw new Error("No se pudo crear el registro.");
  }
};
const getAllPrestamos = async () => {
try {
const prestamos = await Prestamos.findAll()
return prestamos
} catch (error) {
throw new Error ("No hay registros para mostrar");
}
};
module.exports = {
  postPrestamos,
  getAllPrestamos
}
