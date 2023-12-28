const warehouseModel = require("../models/warehouseModel");

// Get All Warehouses
module.exports.getAllWarehouse = async (req, res) => {
  try {
    const AllWarehouse = await warehouseModel.find({});
    return res.status(200).json({
      count: AllWarehouse.length,
      data: AllWarehouse,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// GET a Single Warehouse
module.exports.getSingleWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const SingleWarehouse = await warehouseModel.findById(id);
    if (SingleWarehouse) {
      return res.status(200).json(SingleWarehouse);
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// POST a Single Warehouse
module.exports.createSingleWarehouse = async (req, res) => {
  try {
    // send all required fields (not written yet)
    const newWarehouse = {
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      contact: {
        name: req.body.contact.name,
        position: req.body.contact.position,
        phone: req.body.contact.phone,
        email: req.body.contact.email,
      },
    };
    const CreatedWarehouse = await warehouseModel.create(newWarehouse);
    return res.status(201).json({
      message: `Warehouse Created Successfully`,
      data: CreatedWarehouse,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// PUT a Single Warehouse
module.exports.updateSingleWarehouse = async (req, res) => {
  try {
    // send all required fields (not written yet)

    const { id } = req.params;
    const UpdatedWarehouse = await warehouseModel.findByIdAndUpdate(
      id,
      req.body
    );
    if (!UpdatedWarehouse) {
      return response.status(404).json({ message: "Warehouse Not Found" });
    } else {
      return res.status(200).json({
        message: `Warehouse ${id} Updated Successfully`,
      });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Delete a Single Warehouse
module.exports.deleteSingleWarehouse = async (req, res) => {
  try {
    // send all required fields (not written yet)

    const { id } = req.params;
    const DeletedWarehouse = await warehouseModel.findByIdAndDelete(id);
    if (!DeletedWarehouse) {
      return response.status(404).json({ message: "Warehouse Not Found" });
    } else {
      return res.status(200).json({
        message: `Warehouse ${id} Deleted Successfully`,
      });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
