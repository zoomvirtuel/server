const { Router } = require("express");
const router = Router();

const {
  postUser,
  getUserById,
} = require("../controller/cUser.js");

router.post("/", async (req, res) => {
  const user = req.body.input;
  console.log(user)
  try {
    const nUser = await postUser(user);
    console.log(nUser)
    if (nUser) {
      return res.status(200).json(nUser);
    } else {
      return res.status(404).json({
        error:
          "No se logro crear el usuario vuelva a intentar o contacte con soporte",
      });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id
    const user = await getUserById(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "No se encontro el usuario" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
