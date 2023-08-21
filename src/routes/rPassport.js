const { Router } = require("express");
require("dotenv").config();
const router = Router();
const passport = require("passport");

const { getUser, getUserById, } = require("../controller/cUser.js");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: true }),
  async (req, res) => {
    try {
      const user = req.user;
      const existe = await getUserById(user.seb);
      if (existe) {
        return res.redirect(process.env.GOOGLE_HOME);
      } else {
        return res.redirect(process.env.GOOGLE_REGISTER);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

module.exports = router;
