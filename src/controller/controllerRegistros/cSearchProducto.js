const { Producto, Ventas, Compras } = require("../../db.js");

const getProductoPrecioAndCantidad = async () => {
  try {
    const productos = await Producto.findAll({
      include: [
        { model: Ventas, as: "venta" },
        { model: Compras, as: "compra", order: [["createdAt", "DESC"]] }, // Ordena las compras por fecha descendente
      ],
    });

    const productosConInfo = productos.map((producto) => {
      // Calcula la cantidad de ventas
      const cantidadVentas = producto.venta.reduce(
        (total, venta) => total + venta.cantidad,
        0
      );

      // Calcula la cantidad de compras
      const cantidadCompras = producto.compra.reduce(
        (total, compra) => total + compra.cantidad,
        0
      );

      // Obtiene la última compra para obtener los precios más recientes
      const ultimaCompra = producto.compra[0]; // La primera compra es la más reciente debido al ordenamiento

      return {
        id: producto.id,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        imagen: producto.imagen,
        precioCompra: ultimaCompra ? ultimaCompra.precioCompra : null,
        precioVenta: ultimaCompra ? ultimaCompra.precioVenta : null,
        precioVentaDiferido: ultimaCompra
          ? ultimaCompra.precioVentaDiferido
          : null,
        existencia: cantidadCompras - cantidadVentas,
      };
    });
    productosConInfo.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return productosConInfo;
  } catch (error) {
    throw new Error("Error al obtener la información de los productos");
  }
};

module.exports = {
  getProductoPrecioAndCantidad,
};
