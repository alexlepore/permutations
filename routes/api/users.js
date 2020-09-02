const router = require("express").Router();
const { registerController } = require("../../controllers/register");

router
    .route("/register")
    .post(registerController)

module.exports = router;