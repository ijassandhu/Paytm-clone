require("dotenv").config(); // Load environment variables

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET, // Access JWT_SECRET from .env
};
