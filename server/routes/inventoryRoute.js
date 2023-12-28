const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventoryController");

// GET All Inventories
router.get("/", inventoryController.getAllInventory);

// GET a Single Inventory
router.get("/:id", inventoryController.getSingleInventory);

// POST a Single Inventory
router.post("/", inventoryController.createSingleInventory);

// PUT a Single Inventory
router.put("/:id", inventoryController.updateSingleInventory);

// DELETE a Single Inventory
router.delete("/:id", inventoryController.deleteSingleInventory);

module.exports = router;
