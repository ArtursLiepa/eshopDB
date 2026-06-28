const express = require("express");
const users = require("../../Users/Model/userModel");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res) => {
  try {
    const userName = req.body.username;
    console.log(userName);
    const user = await users
      .findOne({ username: userName })
      .select("+password");
    if (!user)
      return res.status(401).json({ error: "Username does not exist" });

    const userPassword = req.body.password;
    console.log(userPassword);
    const password = await users.comparePassword(userPassword);
    if (!password) return res.status(401).json({ error: "Incorrect password" });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

module.exports = { authenticateUser };
