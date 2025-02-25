const express = require("express");
const router = express.Router();
const zod = require("zod");

const schema = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});
router.post("/api/v1/signup", (req, res) => {});
router.get("/api/v1/signin", (req, res) => {});
module.exports = {
  router,
};
