const Inventory = require("../models/inventoryModel");

// Get All Inventory
module.exports.getAllInventory = async (req, res) => {
  try {
    const AllInventory = await Inventory.find({});
    return res.status(200).json({
      count: AllInventory.length,
      data: AllInventory,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get All Inventory from Single Warehouse
module.exports.getAllWarehouseInventory = async (req, res) => {
  try {
    const { warehouseID } = req.params;
    const AllWarehouseInventory = await Inventory.find({
      warehouseID: warehouseID,
    });
    if (AllWarehouseInventory) {
      return res.status(200).json({
        count: AllWarehouseInventory.length,
        data: AllWarehouseInventory,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get a Single Inventory
module.exports.getSingleInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const SingleInventory = await Inventory.findById(id);
    if (SingleInventory) {
      return res.status(200).json(SingleInventory);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Create a Single Inventory
module.exports.createSingleInventory = async (req, res) => {
  try {
    const newInventory = {
      warehouseID: req.body.warehouseID,
      warehouseName: req.body.warehouseName,
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      quantity: req.body.quantity,
    };
    const CreatedInventory = await Inventory.create(newInventory);
    if (CreatedInventory) {
      return res.status(201).json({
        message: `Inventory Created Successfully`,
        data: CreatedInventory,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update a Single Inventory
module.exports.updateSingleInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const UpdatedInventory = await Inventory.findByIdAndUpdate(id, req.body);
    if (UpdatedInventory) {
      return res.status(200).json({
        message: `Inventory ${id} Updated Successfully`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete a Single Inventory
module.exports.deleteSingleInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const DeletedInventory = await Inventory.findByIdAndDelete(id);
    if (DeletedInventory) {
      return res
        .status(200)
        .json({ message: `Inventory ${id} Deleted Successfully` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
