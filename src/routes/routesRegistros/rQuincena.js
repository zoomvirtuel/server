const { Router } = require("express");
const router = Router();

const {
  postQuincena,
  getAllQuincena,
  updateQuincena,
  deleteQuincena,
  getQuincenaMoneda,
  getQuincenaAdult,
  getQuincenaAmateur,
  getQuincenaBonga,
  getQuincenaCam4,
  getQuincenaChaturbate,
  getQuincenaDirty,
  getQuincenaIsLive,
  getQuincenaSender,
  getQuincenaSkype,
  getQuincenaStripchat,
  getQuincenaVx,
  getQuincenaXlove,
  getQuincenaXloveNueva,
} = require("../../controller/controllerRegistros/cQuincena.js");

router.post("/", async (req, res) => {
  const quincena = req.body;
  try {
    const nQuincena = await postQuincena(quincena);
    return res.status(200).json(nQuincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allQuincena = await getAllQuincena();
    return res.status(200).json(allQuincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/moneda/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  try {
    const quincena = await getQuincenaMoneda(id);
    console.log(quincena)
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/adult/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaAdult(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/amateur/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaAmateur(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/bonga/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaBonga(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/cam4/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaCam4(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/chaturbate/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaChaturbate(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/dirty/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaDirty(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/islive/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaIsLive(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/sender/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaSender(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/skype/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaSkype(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/stripchat/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaStripchat(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/vx/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaVx(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/xlove/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaXlove(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/xlovenueva/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await getQuincenaXloveNueva(id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nQuincena = req.body.nQuincena;
  try {
    const editQuincena = await updateQuincena(id, nQuincena);
    return res.status(200).json(editQuincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await deleteQuincena(id);
    if (quincena.error) {
      return res.status(404).json(quincena);
    }
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send({ error: "Error al eliminar la quincena" });
  }
});

module.exports = router;
