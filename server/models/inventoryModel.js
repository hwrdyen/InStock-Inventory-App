const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
  {
    warehouseID: {
      type: String,
      required: true,
    },
    warehouseName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
