const { Router } = require("express");
const router = Router();

const { pxln } = require("../controller/cXloveNueva.js");

router.post("/", async (req, res) => {
  const coxln = req.body.coxln;
  try {
    const ncoxln = await pxln(coxln);
    if (ncoxln[0]) {
      return res.status(200).json(ncoxln);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron realizados" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
