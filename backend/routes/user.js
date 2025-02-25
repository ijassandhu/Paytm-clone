const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const signupSchema = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});
router.post("/api/v1/signup", async (req, res) => {
  const body = req.body;
  const parsedInput = signupSchema.safeParse(req.body);
  if (!parsedInput) {
    res.status(400).json({ error: "Email already taken/Invalid input" });
  }
  const existingUser = await User.findOne({
    username: body.username,
  });
  if (existingUser._id) {
    return res.status(411).json({
      mess: "Email already taken/Invalid input",
    });
  }
  const user = User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;
  const token = jwt.sign(
    {
      userId: userId,
    },
    JWT_SECRET
  );
  res.json({
    mess: "User created successfully",
    token: token,
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
router.put("/", authMiddleware, async (res, req) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({ error: "Error while updating information" });
  }
  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    mess: "Updated successfully",
  });
});
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});
module.exports = {
  router,
};
