const { Router } = require("express");
const router = Router();

const {
  relationUbicationAndPorcentaje,
} = require("../../controller/controllerRegistros/cRelationUbicationAndPorcentaje.js");

router.post("/", async (req, res) => {
  const input = req.body;
  try {
    const relation = await relationUbicationAndPorcentaje(input);
    return res.status(200).json(relation);
  } catch (error) {
    return res.status(500).json({ error: "Error al crear las relaciones" });
  }
});

module.exports = router;
