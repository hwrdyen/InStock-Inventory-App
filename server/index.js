const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const warehouseRoute = require("./routes/warehouseRoute");
const inventoryRoute = require("./routes/inventoryRoute");

const app = express();
const CONNECTION_URL = process.env.mongoDBURL.replace(
  "<password>",
  process.env.mongoDBPassword
);
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use("/warehouse", warehouseRoute);
app.use("/inventory", inventoryRoute);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log(`Connected to MongoDB...`);
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
