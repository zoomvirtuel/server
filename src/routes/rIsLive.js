const { Router } = require("express");
const router = Router();

const { pil } = require("../controller/cIsLive.js")

router.post("/", async (req, res) => {
const cil = req.body.cil;
try {
const ncil = await pil(cil);
if (ncil[0]) {
return res.status(200).json(ncil);
} else {
return res.status(404).json({error: 'Los registros ya fueron realizados'})
}
} catch (error) {
return res.status(500).send(error.message);
};
});

module.exports = router