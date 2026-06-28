const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../Controller/userController");
const authMiddleware = require("../../Middleware/auth");

router.get("/", authMiddleware, getUser);
router.post("/register", createUser);

module.exports = router;
