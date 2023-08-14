const { Router } = require("express");
const router = Router();

//* importacion de rutas
const rAdultwork = require("./rAdultWork.js");
const rAmateur = require("./rAmateur.js");
const rBonga = require('./rBonga.js');
const rCam4 = require('./rCam4.js');
const rChaturbate = require('./rChaturbate.js');
const rDirty = require('./rDirty.js')
const rIslive = require('./rIsLive.js')
const rSender = require('./rSender.js')
const rSkype = require('./rSkype.js')
const rStripchat = require('./rStripchat.js')
const rVx = require('./rVx.js')
const rXlove = require('./rXlove.js')


//* ejecucion de rutas
router.use("/corte", rAdultwork);
router.use("/amateur", rAmateur);
router.use('/bonga', rBonga);
router.use('/cam4', rCam4);
router.use("/chaturbate", rChaturbate);
router.use('/dirty', rDirty);
router.use('/islive', rIslive);
router.use('/sender', rSender)
router.use('/skype', rSkype)
router.use('/stripchat', rStripchat)
router.use('/vx', rVx)
router.use('/xlove', rXlove)

module.exports = router;

