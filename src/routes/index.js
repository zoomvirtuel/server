const { Router } = require("express");
const router = Router();

//* importacion de rutas
const rAdultwork = require("./routesPaginas/rAdultWork.js");
const rAmateur = require("./routesPaginas/rAmateur.js");
const rBonga = require("./routesPaginas/rBonga.js");
const rCam4 = require("./routesPaginas/rCam4.js");
const rChaturbate = require("./routesPaginas/rChaturbate.js");
const rDirty = require("./routesPaginas/rDirty.js");
const rIslive = require("./routesPaginas/rIsLive.js");
const rSender = require("./routesPaginas/rSender.js");
const rSkype = require("./routesPaginas/rSkype.js");
const rStripchat = require("./routesPaginas/rStripchat.js");
const rVx = require("./routesPaginas/rVx.js");
const rXlove = require("./routesPaginas/rXlove.js");
const rXloveNueva = require("./routesPaginas/rXloveNueva.js");
const rUser = require("./routesRegistros/rUser.js");
const rPaginas = require("./routesRegistros/rPaginas.js");
const rProducto = require("./routesRegistros/rProducto.js");
const rCompras = require('./routesRegistros/rCompras.js');
const rVenta = require("./routesRegistros/rVentas.js");
const rQuincena = require("./routesRegistros/rQuincena.js");
const rComment = require("./routesRegistros/rComments.js");
const rUserName = require('./routesRegistros/rUserName.js');
const rMoneda = require('./routesRegistros/rMoneda.js');

//* ejecucion de rutasrouter.use("/", rPassport);
router.use("/registro", rUser);
router.use("/paginas", rPaginas);
router.use("/producto", rProducto);
router.use('/compras', rCompras);
router.use('/venta', rVenta);
router.use('/quincena', rQuincena);
router.use('/comentario', rComment);
router.use('/username', rUserName);
router.use('/moneda', rMoneda);


router.use("/corte", rAdultwork);
router.use("/amateur", rAmateur);
router.use("/bonga", rBonga);
router.use("/cam4", rCam4);
router.use("/chaturbate", rChaturbate);
router.use("/dirty", rDirty);
router.use("/islive", rIslive);
router.use("/sender", rSender);
router.use("/skype", rSkype);
router.use("/stripchat", rStripchat);
router.use("/vx", rVx);
router.use("/xlove", rXlove);
router.use("/xlovenueva", rXloveNueva);

module.exports = router;
