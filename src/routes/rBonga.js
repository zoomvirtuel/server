const { Router } = require("express");
const router = Router();

const { postBonga, getAllBonga } = require("../controller/cBonga.js");

router.post("/", async (req, res) => {
  const corteBonga = req.body.corteBonga;
  try {
    const newCorteBonga = await postBonga(corteBonga);
    if (newCorteBonga[0]) {
      return res.status(200).json(newCorteBonga);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron hechos." });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const bonga = await getAllBonga();
    if (bonga) {
      return res.status(200).json(bonga);
    } else {
      return res.status(404).json({ error: "No hay resgistros para mostrar." });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
