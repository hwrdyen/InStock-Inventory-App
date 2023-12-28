import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function InventoryCreate() {
  const navigate = useNavigate();

  const [ItemName, setItemName] = useState("");
  const [ItemDescription, setItemDescription] = useState("");
  const [ItemCategory, setItemCategory] = useState("");
  const [ItemStatus, setItemStatus] = useState("");
  const [ItemQuantity, setItemQuantity] = useState("");
  const [WarehouseName, setWarehouseName] = useState("");
  const [WarehouseID, setWarehouseID] = useState("");

  const handleStatusChange = (e) => {
    setItemStatus(e.target.value);
  };

  const handleCreateInventory = () => {
    const CreatedInventoryData = {
      warehouseID: WarehouseID,
      warehouseName: WarehouseName,
      name: ItemName,
      description: ItemDescription,
      category: ItemCategory,
      status: ItemStatus,
      quantity: ItemQuantity,
    };

    axios
      .post(`http://localhost:8000/inventory`, CreatedInventoryData)
      .then(() => {
        navigate("/inventory");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <img
        onClick={(e) => {
          e.preventDefault();
          navigate("/inventory");
        }}
        src={ArrowBack}
        alt="Back Arrow"
      />
      <div>Add New Inventory Item</div>
      {/* Item Details */}
      <div>Item Details</div>
      <label htmlFor="itemName">Item Name</label>
      <input
        type="text"
        id="itemName"
        value={ItemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <label htmlFor="itemDescription">Description</label>
      <textarea
        type="text"
        id="itemDescription"
        value={ItemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <label htmlFor="itemCategory">Category</label>
      <input
        type="text"
        id="itemCategory"
        value={ItemCategory}
        onChange={(e) => setItemCategory(e.target.value)}
      />
      {/* Item Availability */}
      <div>Item Availability</div>
      <input
        type="radio"
        id="itemStatus-instock"
        name="itemStatus"
        value="In Stock"
        // checked={ItemStatus === "In Stock"}
        onChange={handleStatusChange}
      />
      <label htmlFor="itemStatus-instock">In Stock</label>
      <input
        type="radio"
        id="itemStatus-outofstock"
        name="itemStatus"
        value="Out of Stock"
        // checked={ItemStatus === "Out of Stock"}
        onChange={handleStatusChange}
      />
      <label htmlFor="itemStatus-outofstock">Out of Stock</label>
      <label htmlFor="itemQuantity">Quantity</label>
      <input
        type="number"
        id="itemQuantity"
        value={ItemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
      <label htmlFor="itemWarehouseName">Warehouse Name</label>
      <input
        type="text"
        id="itemWarehouseName"
        value={WarehouseName}
        onChange={(e) => setWarehouseName(e.target.value)}
      />
      <label htmlFor="itemWarehouseId">Warehouse ID</label>
      <input
        type="text"
        id="itemWarehouseId"
        value={WarehouseID}
        onChange={(e) => setWarehouseID(e.target.value)}
      />
      <button onClick={() => navigate("/inventory")}>Cancel</button>
      <button onClick={handleCreateInventory}>+ Add Item</button>
      <Footer />
    </>
  );
}

export default InventoryCreate;
