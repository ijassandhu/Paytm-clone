const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = Account.findOne({
    userId: req.userId,
  });
  res.json({
    balance: account.balance,
  });
});
router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startsession();
  session.startTransaction();
  const { amount, to } = req.body;
});
module.exports = {
  router,
};
