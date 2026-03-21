const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../Controller/userController");

router.post("/login", getUsers);
router.post("/register", createUser);
// router.get("/:productID", getProduct);

module.exports = router;
