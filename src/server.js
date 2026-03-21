const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const itemRoutes = require("./Modules/Items/Routes/item-router");
const segmentRoutes = require("./Modules/segmentModule/Routes/segment-routes");
const categoryRoutes = require("./Modules/categoryModule/Routes/category-routes");
const productRoutes = require("./Modules/productModule/Routes/product-routes");
const usersRoutes = require("./Modules/users/Routes/users-route");

const app = express();
app.use(CORS());
app.use(express.json());
app.use("/items", itemRoutes);
app.use("/segments", segmentRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/auth", usersRoutes);

const API_URL = 3000;
/*This is for connecting to MongoDB container server*/
// const DB_URL = "mongodb://mongodb/practiceData";

/*This is for connecting to MongoDB local server*/
const DB_URL = "mongodb://localhost:27017/practiceData";

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
