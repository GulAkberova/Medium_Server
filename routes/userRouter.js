const express = require("express");
const { userController } = require("../controllers/userController");

const router = express.Router();

router.get('/', userController.getAll);
router.post('/signup',userController.getSignIn);
router.post('/signup' ,userController.getSignUp)


module.exports = router