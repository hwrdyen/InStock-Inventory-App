const express = require("express");
const router = express.Router();

const warehouseController = require("../controllers/warehouseController");

// GET All Warehouses
router.get("/", warehouseController.getAllWarehouse);

// GET a Single Warehouse
router.get("/:id", warehouseController.getSingleWarehouse);

// POST (Create) a Single Warehouse
router.post("/", warehouseController.createSingleWarehouse);

// PUT (Edit) a Single Warehouse
router.put("/:id", warehouseController.updateSingleWarehouse);

// Delete a Single Warehouse
router.delete("/:id", warehouseController.deleteSingleWarehouse);

module.exports = router;
