const { Router } = require("express");
const router = Router();

//* importacion de rutas
const rAdultwork = require("./rAdultWork.js");
const rChaturbate = require('./rChaturbate.js');
const rBonga = require('./rBonga.js');
const rSender = require('./rSender.js')
// const rDirty = require('./rDirty.js')
const rIslive = require('./rIsLive.js')

//* ejecucion de rutas
router.use("/corte", rAdultwork);
router.use("/chaturbate", rChaturbate);
router.use('/bonga', rBonga);
router.use('/sender', rSender)
// router.use('/dirty', rDirty);
router.use('/islive', rIslive);

module.exports = router;

