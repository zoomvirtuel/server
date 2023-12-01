const { Router } = require("express");
const router = Router();

const {
  postTripeSiete,
} = require("../../controller/controllerPaginas/cTripleSiete.js");

router.post("/", async (req, res) => {
  const tripleSiete = req.body;
  try {
    const newTriplesSete = await postTripeSiete(tripleSiete);
    return res.status(200).json(newTriplesSete);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
