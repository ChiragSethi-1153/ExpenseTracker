const express = require('express');
const { userController, expenseController } = require('../controller');
const router = express.Router();

router.post("/signup", userController.signup)
router.post("/login", userController.login)

router.post('/expense/:id', expenseController.expense)
router.get('/expenses/:id', expenseController.expensess)

// router.post('/netBalance', expenseController.netBalance)


module.exports = router;
