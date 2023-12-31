import "./InventoryCreate.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function InventoryCreate() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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

    if (
      !WarehouseID ||
      !WarehouseName ||
      !ItemName ||
      !ItemDescription ||
      !ItemCategory ||
      !ItemStatus ||
      !ItemQuantity
    ) {
      enqueueSnackbar("Missing Mandatory Field!", {
        variant: "error",
      });
    } else {
      axios
        .post(`http://localhost:8000/inventory`, CreatedInventoryData)
        .then(() => {
          enqueueSnackbar("Inventory Created successfully", {
            variant: "success",
          });
          navigate("/inventory");
        })
        .catch((error) => {
          enqueueSnackbar("Error", {
            variant: "error",
          });
          console.log(error);
          alert(`Error: ${error}`);
        });
    }
  };

  return (
    <>
      <NavBar />
      <div className="InventoryCreate__Container">
        {/* InventoryCreate Title */}
        <div className="InventoryCreate__TitleContainer">
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/inventory");
            }}
            src={ArrowBack}
            alt="Back Arrow"
            className="InventoryCreate__TitleContainer--backicon"
          />
          <div className="InventoryCreate__TitleContainer--title">
            Add New Inventory Item
          </div>
        </div>

        {/* Inventory Create Form */}
        <div className="InventoryCreate__InputFormContainer">
          {/* Form Input Container */}
          <div className="InventoryCreate__FormContainer">
            {/* Item Details */}
            <div className="InventoryCreate__FormContainer--itemdetailsection">
              <div className="InventoryCreate__FormContainer--detailtitle">
                Item Details
              </div>
              {/* Item Name */}
              <div className="InventoryCreate__FormContainer--inputblock">
                <label
                  htmlFor="itemName"
                  className="InventoryCreate__FormContainer--detaillabel"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  id="itemName"
                  value={ItemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="InventoryCreate__FormContainer--detailinput"
                  placeholder="Item Name"
                />
              </div>

              {/* Description */}
              <div className="InventoryCreate__FormContainer--inputblock">
                <label
                  htmlFor="itemDescription"
                  className="InventoryCreate__FormContainer--detaillabel"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="itemDescription"
                  value={ItemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  className="InventoryCreate__FormContainer--detailtextareainput"
                  rows="4"
                  cols="50"
                  placeholder="Please enter a brief item description..."
                />
              </div>

              {/* Category */}
              <div className="InventoryCreate__FormContainer--inputblock">
                <label
                  htmlFor="itemCategory"
                  className="InventoryCreate__FormContainer--detaillabel"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="itemCategory"
                  value={ItemCategory}
                  onChange={(e) => setItemCategory(e.target.value)}
                  className="InventoryCreate__FormContainer--detailinput"
                  placeholder="Category"
                />
              </div>
            </div>

            {/* Item Availability */}
            <div className="InventoryCreate__FormContainer--itemavailabilitysection">
              <div className="InventoryCreate__FormContainer--detailtitle">
                Item Availability
              </div>

              {/* Status */}
              <div className="InventoryCreate__FormContainer--inputblock">
                <div className="InventoryCreate__FormContainer--detaillabel">
                  Status
                </div>
                <div className="InventoryCreate__FormContainer--radioblock">
                  <div className="InventoryCreate__FormContainer--radiooption">
                    <input
                      type="radio"
                      id="itemStatus-instock"
                      name="itemStatus"
                      value="In Stock"
                      // checked={ItemStatus === "In Stock"}
                      onChange={handleStatusChange}
                    />
                    <label htmlFor="itemStatus-instock">In Stock</label>
                  </div>
                  <div className="InventoryCreate__FormContainer--radiooption">
                    <input
                      type="radio"
                      id="itemStatus-outofstock"
                      name="itemStatus"
                      value="Out of Stock"
                      // checked={ItemStatus === "Out of Stock"}
                      onChange={handleStatusChange}
                    />
                    <label htmlFor="itemStatus-outofstock">Out of Stock</label>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="InventoryCreate__FormContainer--inputblock">
                <label
                  htmlFor="itemQuantity"
                  className="InventoryCreate__FormContainer--detaillabel"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="itemQuantity"
                  value={ItemQuantity}
                  onChange={(e) => setItemQuantity(e.target.value)}
                  className="InventoryCreate__FormContainer--detailinput"
                  placeholder="0"
                />
              </div>

              {/* Warehouse Name */}
              <div className="InventoryCreate__FormContainer--inputblock">
                <label
                  htmlFor="itemWarehouseName"
                  className="InventoryCreate__FormContainer--detaillabel"
                >
                  Warehouse Name
                </label>
                <input
                  type="text"
                  id="itemWarehouseName"
                  value={WarehouseName}
                  onChange={(e) => setWarehouseName(e.target.value)}
                  className="InventoryCreate__FormContainer--detailinput"
                  placeholder="Warehouse Name"
                />
              </div>

              {/* Warehouse ID */}
              <div className="InventoryCreate__FormContainer--inputblock">
                <label
                  htmlFor="itemWarehouseId"
                  className="InventoryCreate__FormContainer--detaillabel"
                >
                  Warehouse ID
                </label>
                <input
                  type="text"
                  id="itemWarehouseId"
                  value={WarehouseID}
                  onChange={(e) => setWarehouseID(e.target.value)}
                  className="InventoryCreate__FormContainer--detailinput"
                  placeholder="Warehouse ID"
                />
              </div>
            </div>
          </div>

          {/* Button Container */}
          <div className="InventoryCreate__ButtonContainer">
            <button
              onClick={() => navigate("/inventory")}
              className="InventoryCreate__ButtonContainer--cancelbutton"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateInventory}
              className="InventoryCreate__ButtonContainer--createbutton"
            >
              + Add Item
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InventoryCreate;
