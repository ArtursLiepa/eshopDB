const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Bearer TOKEN
  console.log(`Before decoding ${token}`);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(`After decoding ${JSON.stringify(decoded)}`);
    req.user = decoded; // attach decoded payload (e.g. userId)

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
