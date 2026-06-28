const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
const app = express();
app.use(CORS());
app.use(express.json());

const itemRoutes = require("./Modules/Items/Routes/item-router");
const segmentRoutes = require("./Modules/segmentModule/Routes/segment-routes");
const categoryRoutes = require("./Modules/categoryModule/Routes/category-routes");
const productRoutes = require("./Modules/productModule/Routes/product-routes");
const authRoute = require("./Modules/Authentication/Routes/auth-route");
const userRoutes = require("./Modules/usersModule/Routes/user-route");

app.use("/items", itemRoutes);
app.use("/segments", segmentRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/auth", authRoute);
app.use("/user", userRoutes);

// API_URL = 3000;
// DB_URL = "mongodb://localhost:27017/practiceData";
const DB_URL = process.env.CLDB_URL;
const API_URL = process.env.API_URL;
async function startServer() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connected!".bgGreen);
    console.log("Mongo connected:", mongoose.connection.name);

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    console.log(
      "Collections:",
      collections.map((c) => c.name),
    );

    app.listen(API_URL, () => {
      console.log(`App is listening on port ${API_URL}`);
    });
  } catch (error) {
    console.log(error);
  }
}

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

startServer();
