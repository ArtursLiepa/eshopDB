const express = require("express");
const users = require("../Model/userModel");
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

const getUser = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const user = await users.findById({ _id: userId }).select("-password");
    if (!user) return res.status(401).json({ error: "User not found" });
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

module.exports = { createUser, getUser };
