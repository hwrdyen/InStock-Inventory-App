import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function InventoryEdit() {
  const { inventoryID } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [Loading, setLoading] = useState(false);

  const [ItemName, setItemName] = useState("");
  const [ItemDescription, setItemDescription] = useState("");
  const [ItemCategory, setItemCategory] = useState("");
  const [ItemStatus, setItemStatus] = useState("");
  const [ItemQuantity, setItemQuantity] = useState("");
  const [WarehouseName, setWarehouseName] = useState("");
  const [WarehouseID, setWarehouseID] = useState("");

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:8000/inventory/${inventoryID}`)
      .then((response) => {
        setItemName(response.data?.name);
        setItemDescription(response.data?.description);
        setItemCategory(response.data?.category);
        setItemStatus(response.data?.status);
        setItemQuantity(response.data?.quantity);
        setWarehouseName(response.data?.warehouseName);
        setWarehouseID(response.data?.warehouseID);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleStatusChange = (e) => {
    setItemStatus(e.target.value);
  };

  const handleUpdateInventory = () => {
    const UpdatedInventoryData = {
      warehouseID: WarehouseID,
      warehouseName: WarehouseName,
      name: ItemName,
      description: ItemDescription,
      category: ItemCategory,
      status: ItemStatus,
      quantity: ItemQuantity,
    };

    axios
      .put(
        `http://localhost:8000/inventory/${inventoryID}`,
        UpdatedInventoryData
      )
      .then(() => {
        enqueueSnackbar("Inventory Edited successfully", {
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
  };

  return (
    <>
      <NavBar />
      <img
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        src={ArrowBack}
        alt="Back Arrow"
      />

      <div>Edit Inventory Item for {inventoryID}</div>

      <div>
        {Loading ? (
          <Spinner />
        ) : (
          <>
            {/* Item Details */}
            <div>Item Details</div>
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              id="itemName"
              placeholder={ItemName}
              value={ItemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <label htmlFor="itemDescription">Description</label>
            <textarea
              type="text"
              id="itemDescription"
              placeholder={ItemDescription}
              value={ItemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
            <label htmlFor="itemCategory">Category</label>
            <input
              type="text"
              id="itemCategory"
              placeholder={ItemCategory}
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
              checked={ItemStatus === "In Stock"}
              onChange={handleStatusChange}
            />
            <label htmlFor="itemStatus-instock">In Stock</label>
            <input
              type="radio"
              id="itemStatus-outofstock"
              name="itemStatus"
              value="Out of Stock"
              checked={ItemStatus === "Out of Stock"}
              onChange={handleStatusChange}
            />
            <label htmlFor="itemStatus-outofstock">Out of Stock</label>
            <label htmlFor="itemQuantity">Quantity</label>
            <input
              type="number"
              id="itemQuantity"
              placeholder={ItemQuantity}
              value={ItemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
            />
            <label htmlFor="itemWarehouseName">Warehouse Name</label>
            <input
              type="text"
              id="itemWarehouseName"
              placeholder={WarehouseName}
              value={WarehouseName}
              onChange={(e) => setWarehouseName(e.target.value)}
            />
            <label htmlFor="itemWarehouseId">Warehouse ID</label>
            <input
              type="text"
              id="itemWarehouseId"
              placeholder={WarehouseID}
              value={WarehouseID}
              onChange={(e) => setWarehouseID(e.target.value)}
            />
            <button onClick={() => navigate("/inventory")}>Cancel</button>
            <button onClick={handleUpdateInventory}>Save</button>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default InventoryEdit;
