const { Router } = require("express");
const router = Router();

const {
  postComment,
  getAllComment,
  getCommentById,
  updateComment,
  deleteComment,
} = require("../../controller/controllerRegistros/cComentario.js");

router.post("/", async (req, res) => {
  const comment = req.body;
  console.log(comment)
  try {
    const nComment = await postComment(comment);
    return res.status(200).json(nComment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const comments = await getAllComment();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await getCommentById(id);
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nComment = req.body.nComment;
  try {
    const editComment = await updateComment(id, nComment);
    return res.status(200).json(editComment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteComments = await deleteComment(id);
    if (!deleteComments.error) {
      return res.status(404).json(deleteComments);
    }
    return res.status(200).json(deleteComments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
