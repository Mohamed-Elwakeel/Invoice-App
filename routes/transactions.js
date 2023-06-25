const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");

const {
  addExpense,
  deleteExpense,
  getExpenses,
} = require("../controllers/expenses");

const { Signup, Login } = require("../controllers/authController");
const { userVerification } = require("../authMiddleWare");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expense/:id", deleteExpense)
  .post("/signup", Signup)
  .post("/login", Login)
  .post("/", userVerification);

module.exports = router;
