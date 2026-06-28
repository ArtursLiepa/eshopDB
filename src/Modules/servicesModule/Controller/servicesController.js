const express = require("express");
const services = require("../Model/servicesModel");

const getServices = async (req, res) => {
  try {
    const services = await services.find({});
    console.log(services);
    res.status(200).json(services);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getServices };
