const { Router } = require("express");
const router = Router();
const {
  postCorte,
  getAllQuincena,
  postParcial,
  getAllParcial,
} = require("../controller/cAdultwork.js");

router.post("/", async (req, res) => {
  const corte = req.body.corte;
  try {
    
    const newData = await postCorte(corte); //enviar al controller
    if (newData[0]) {
      return res.status(200).json(newData);
    }else {
      return res.status(404).json({error: 'Los registros ya fueron realizados'});
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const corte = await getAllQuincena();
    if (corte) {
      res.status(200).json(corte);
    }else {
      res.status(405).json({ error: "No hay resgistro para mostrar." });
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.post("/parcial", async (req, res) => {
  const parcial = req.body.parcial;
  try {
    const newParcial = await postParcial(parcial);
    if (newParcial[0]) {
      return res.status(200).json(newParcial);
    }else {
      return res.status(404).json({error: 'Los registros ya fueron subidos'})
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/parcial", async (req, res) => {
  try {
    const parcial = await getAllParcial();
    if (parcial) {
      res.status(200).json(parcial);
    }else {
      res.status(405).json({ error: "No hay resgistros para mostrar." });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
