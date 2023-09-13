const { Router } = require("express");
const router = Router();

const {
  postUserName,
  getAllUserName,
} = require("../../controller/controllerRegistros/cUserName.js");

router.post("/", async (req, res) => {
  const input = req.body;
  try {
    const nUserName = await postUserName(input);
    return res.status(200).json(nUserName);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allUserName = await getAllUserName();
    return res.status(200).json(allUserName);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
