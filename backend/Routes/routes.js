const express = require('express');
const { userController, expenseController } = require('../controller');
const router = express.Router();

router.post("/signup", userController.signup)
router.post("/login", userController.login)




module.exports = router;
