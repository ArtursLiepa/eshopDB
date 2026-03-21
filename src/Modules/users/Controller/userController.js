const express = require("express");
const users = require("../Model/users");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const user = new users(req.body);
    await user.save();

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
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
    const password = await user.comparePassword(userPassword);
    if (!password) return res.status(401).json({ error: "Incorrect password" });

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

module.exports = { getUsers, createUser };
