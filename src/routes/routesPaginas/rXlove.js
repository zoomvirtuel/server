const { Router } = require("express");
const router = Router();

const { pxl, gxl } = require("../../controller/controllerPaginas/cXlove.js");

router.post("/", async (req, res) => {
  const coxl = req.body.coxl;
  console.log(coxl);
  try {
    const ncoxl = await pxl(coxl);
    if (ncoxl[0]) {
      return res.status(200).json(ncoxl);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron realizados" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/", async (req, res) => {
  try {
    const coxl = await gxl();
    if (coxl[0]) {
      return res.status(200).json(coxl);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
