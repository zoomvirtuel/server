const { Router } = require("express");
const router = Router();

const {
  postPrestamos,
  getAllPrestamos,
  getPrestamoById,
  updatePrestamos,
  deletePrestamo,
} = require("../../controller/controllerRegistros/cPrestamos.js");

router.post("/", async (req, res) => {
  const prestamo = req.body;
  try {
    const newPrestamo = await postPrestamos(prestamo);
    return res.status(200).json(newPrestamo);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const prestamos = await getAllPrestamos();
    return res.status(200).json(prestamos);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prestamo = await getPrestamoById(id);
    return res.status(200).json(prestamo);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nPrestamo = req.body;
  try {
    const editPrestamo = await updatePrestamos(id, nPrestamo);
    return res.status(200).json(editPrestamo);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prestamo = await deletePrestamo(id);
    if (prestamo.error) {
      return res.status(404).json(prestamo);
    }
    return res.status(200).json(prestamo);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
