const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const itemRoutes = require("./Modules/Items/Routes/item-router");
const segmentRoutes = require("./Modules/segmentModule/Routes/segment-routes");
const categoryRoutes = require("./Modules/categoryModule/Routes/category-routes");
const productRoutes = require("./Modules/productModule/Routes/product-routes");

const app = express();
app.use(CORS());
app.use(express.json());
app.use("/items", itemRoutes);
app.use("/segments", segmentRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

const API_URL = 3000;
const DB_URL = "mongodb://mongodb/practiceData";

async function startServer() {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Database connected!".bgGreen);
      app.listen(API_URL, () => {
        console.log(`App is listening on port ${API_URL}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

startServer();
