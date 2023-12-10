const { Router } = require("express");
const router = Router();

const {
  postUserName,
  getAllUserName,
  getUserNameById,
  updateUserName,
  deleteUserName
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userName = await getUserNameById(id);
    return res.status(200).json(userName);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editedUserName = req.body;
  console.log(id)
  console.log(editedUserName)
  try {
    const userName = await updateUserName(id, editedUserName);
    return res.status(200).json(userName);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userName = await deleteUserName(id);
    if (userName.error) {
      return res.status(404).json(userName);
    }
    return res.status(200).json(userName);
  } catch (error) {
    return res.status(500).send({ error: "Error al eliminar el userName." });
  }
});

module.exports = router;
