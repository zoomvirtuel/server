const { Router } = require("express");
const router = Router();

const {
  postPagina,
  getAllPaginas,
  getPaginaById,
  updatePagina,
  deletePagina,
} = require("../../controller/controllerRegistros/cPaginas.js");

router.post("/", async (req, res) => {
  const pagina = req.body.pagina;
  try {
    const nPagina = await postPagina(pagina);
    if (nPagina) {
      return res.status(200).json(nPagina);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos esa pagina ya fue creada" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const paginas = await getAllPaginas();
    if (paginas) {
      return res.status(200).json(paginas);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pagina = await getPaginaById(id);
    return res.status(200).json(pagina);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nPagina = req.body.nPagina;
  try {
    const editPagina = await updatePagina(id, nPagina);
    return res.status(200).json(editPagina);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pagina = await deletePagina(id);
    if (pagina.error) {
      return res.status(404).json(pagina);
    }
    return res.status(200).json(pagina);
  } catch (error) {
    return res.status(500).send({ error: "Error al eliminar la pagina." });
  }
});

module.exports = router;
