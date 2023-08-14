require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require("cors");
const videoRoutes = require("./routes/video.route");
const commentRoutes = require("./routes/comment.route");
const productRoutes = require("./routes/product.route");

app.use(cors());

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
  });

app.use("/api", videoRoutes);
app.use("/api", commentRoutes);
app.use("/api", productRoutes);

app.listen(3080, () => {
  console.log("Server Started at http://localhost:3080");
});
