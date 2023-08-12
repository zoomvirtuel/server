const { Router } = require("express");
const router = Router();

const {
  postChaturbate,
  getAllChaturbate,
} = require("../controller/cChaturbate.js");

router.post("/", async (req, res) => {
  const corteChat = req.body.corteChat;
  try {
    const newCorteChat = await postChaturbate(corteChat);
    if (newCorteChat[0]) {
      return res.status(200).json(newCorteChat);
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
    const chaturbate = await getAllChaturbate();
    if (chaturbate) {
      return res.status(200).json(chaturbate);
    } else {
      return res.status(405).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
