const { Router } = require("express");
const router = Router();

const {
  ps,
  gas,
} = require("../controller/cSender.js");

router.post("/", async (req, res) => {
  const cs = req.body.cs;
  try {
    const ncs = await ps(cs);
    if (ncs[0]) {
      return res.status(200).json(ncs);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron realizados." });
    }
  } catch (error) {
    res.status(500).send(error.message);
  };
});

router.get('/', async (req, res) => { 
  try {
    const cs = await gas();
    if (cs) {
      return res.status(200).json(cs);
    } else {
      return res.status(404).json({error: 'Lo siento no hay resgistros para mostrar.'});
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
