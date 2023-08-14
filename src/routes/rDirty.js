const { Router } = require("express");
const router = Router();

const { pdi } = require("../controller/cDirty.js");

router.post("/", async (req, res) => {
  const codi = req.body.codi;
  try {
    const ncodi = await pdi(codi);
    if (ncodi[0]) {
      return res.status(200).json(ncodi);
    } else {
      return res.status(404).json({ error: "Lo sentimos los registros ya fueron realizados" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
