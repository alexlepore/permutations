const router = require("express").Router();

const usersController = require("../../controllers/users"); 
  
router.route("/").get(usersController.test);

module.exports = router;