const { Router } = require("express");
const router = Router();

const { pxl } = require("../controller/cXlove.js");

router.post("/", async (req, res) => {
  const coxl = req.body.coxl;
  try {
    const ncoxl = await pxl(coxl);
    if (ncoxl) {
      return res.status(200).json(ncoxl);
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
