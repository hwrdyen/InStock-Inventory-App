const mongoose = require("mongoose");

const warehouseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    contact: {
      name: String,
      position: String,
      phone: Number,
      email: String,
    },
  },
  { timestamp: true }
);

const Warehouse = mongoose.model("Warehouse", warehouseSchema);
module.exports = Warehouse;
