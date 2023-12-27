const express = require("express");

const app = express();

module.exports.getWarehouse = (req, res) => {
  return res.status(200).send(`THIS IS WAREHOUSE`);
};
