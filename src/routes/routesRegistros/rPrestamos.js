const { Router } = require("express");
const router = Router();

const {
  postPrestamos,
  getAllPrestamos,
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
};
});

module.exports = router;
