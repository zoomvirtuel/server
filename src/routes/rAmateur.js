const { Router } = require("express");
const router = Router();

const { pam } = require("../controller/cAmateur.js");

router.post("/", async (req, res) => {
  const coam = req.body.coam;
  try {
    const ncoam = await pam(coam);
    if (ncoam[0]) {
      return res.status(200).json(ncoam);
    } else {
      return res.status(404).json({ error: "Lo sentimos los registros ya fueron realizados" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
