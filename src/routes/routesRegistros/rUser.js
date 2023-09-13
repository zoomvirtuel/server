const { Router } = require("express");
const router = Router();

const {
  postUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../../controller/controllerRegistros/cUser.js");

router.post("/", async (req, res) => {
  const user = req.body.input;
  try {
    const nUser = await postUser(user);
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

router.get("/", async (req, res) => {
  try {
    const user = await getAllUser();
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
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

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nUser = req.body.nUser;
  try {
    const editUser = await updateUser(id, nUser);
    return res.status(200).json(editUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);
    if (user.error) {
      return res.status(404).json(user);
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send({ error: "Error al eliminar el usuario." });
  }
});

module.exports = router;
