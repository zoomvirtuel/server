const { Router } = require("express");
require("dotenv").config();
const router = Router();
const passport = require("passport");

const { postUser, getUserById, getUserByBoolean } = require("../controller/cUser.js");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
let user = "";
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: true }),
  async (req, res) => {
    try {
      user = req.user;
      const existe = await getUserByBoolean(user.sub);
      console.log(existe)
      console.log(existe.error)
      if (existe === true) {
        return res.redirect(process.env.GOOGLE_HOME);
      } else {
        return res.redirect(process.env.GOOGLE_REGISTER);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

router.post("/registro", async (req, res) => {
  const front = req.body.input;
  const account = user;
  try {
    const nUser = await postUser(front, account);
    if (nUser) {
      console.log(nUser)
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

router.get("/registro", async (req, res) => {
  try {
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
