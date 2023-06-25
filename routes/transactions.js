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

const { Signup } = require("../controllers/authController");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expense/:id", deleteExpense)
  .post("/signup", Signup);

module.exports = router;
