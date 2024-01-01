import "./InventoryEdit.scss";
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
  const [WarehouseList, setWarehouseList] = useState([]);

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

  const handleCategoryChange = (e) => {
    setItemCategory(e.target.value);
  };

  const handleWarehouseChange = (e) => {
    let selector = document.getElementById("itemWarehouseName");
    let selectedWarehouseName = selector.options[selector.selectedIndex].text;
    setWarehouseName(selectedWarehouseName);
    setWarehouseID(e.target.value);
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

    if (
      !WarehouseID ||
      !WarehouseName ||
      !ItemName ||
      !ItemDescription ||
      !ItemCategory ||
      !ItemStatus ||
      (ItemStatus === "In Stock" && !ItemQuantity)
    ) {
      enqueueSnackbar("Missing Mandatory Field!", {
        variant: "error",
      });
    } else {
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
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/warehouse`)
      .then((response) => {
        setWarehouseList(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (ItemStatus === "Out of Stock") {
      setItemQuantity(0);
    }
  }, [ItemStatus]);

  return (
    <>
      <NavBar />
      {Loading ? (
        <Spinner />
      ) : (
        <div className="InventoryEdit__Container">
          {/* InventoryEdit Title */}
          <div className="InventoryEdit__TitleContainer">
            <img
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
              src={ArrowBack}
              alt="Back Arrow"
              className="InventoryEdit__TitleContainer--backicon"
            />
            <div className="InventoryEdit__TitleContainer--title">
              Edit Inventory Item
            </div>
          </div>

          {/* Inventory Edit Form */}
          <div className="InventoryEdit__InputFormContainer">
            {/* Form Input Container */}
            <div className="InventoryEdit__FormContainer">
              {/* Item Details */}
              <div className="InventoryEdit__FormContainer--itemdetailsection">
                <div className="InventoryEdit__FormContainer--detailtitle">
                  Item Details
                </div>

                {/* Item Name */}
                <div className="InventoryEdit__FormContainer--inputblock">
                  <label
                    htmlFor="itemName"
                    className="InventoryEdit__FormContainer--detaillabel"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    placeholder={ItemName}
                    value={ItemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="InventoryEdit__FormContainer--detailinput"
                  />
                </div>

                {/* Item Description */}
                <div className="InventoryEdit__FormContainer--inputblock">
                  <label
                    htmlFor="itemDescription"
                    className="InventoryEdit__FormContainer--detaillabel"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="itemDescription"
                    placeholder={ItemDescription}
                    value={ItemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    className="InventoryEdit__FormContainer--detailtextareainput"
                    rows="4"
                    cols="50"
                  />
                </div>

                {/* Item Category */}
                <div className="InventoryEdit__FormContainer--inputblock">
                  <label
                    htmlFor="itemCategory"
                    className="InventoryEdit__FormContainer--detaillabel"
                  >
                    Category
                  </label>
                  <select
                    name="itemCategory"
                    id="itemCategory"
                    onChange={handleCategoryChange}
                    className="InventoryEdit__FormContainer--detailinput"
                    value={ItemCategory}
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Gear">Gear</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Health">Health</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
              </div>

              {/* Item Availability */}
              <div className="InventoryEdit__FormContainer--itemavailabilitysection">
                <div className="InventoryEdit__FormContainer--detailtitle">
                  Item Availability
                </div>

                {/* Status */}
                <div className="InventoryEdit__FormContainer--inputblock">
                  <div className="InventoryEdit__FormContainer--radioblock">
                    <div className="InventoryEdit__FormContainer--radiooption">
                      <input
                        type="radio"
                        id="itemStatus-instock"
                        name="itemStatus"
                        value="In Stock"
                        checked={ItemStatus === "In Stock"}
                        onChange={handleStatusChange}
                      />
                      <label htmlFor="itemStatus-instock">In Stock</label>
                    </div>
                    <div className="InventoryEdit__FormContainer--radiooption">
                      <input
                        type="radio"
                        id="itemStatus-outofstock"
                        name="itemStatus"
                        value="Out of Stock"
                        checked={ItemStatus === "Out of Stock"}
                        onChange={handleStatusChange}
                      />
                      <label htmlFor="itemStatus-outofstock">
                        Out of Stock
                      </label>
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="InventoryEdit__FormContainer--inputblock">
                  <label
                    htmlFor="itemQuantity"
                    className="InventoryEdit__FormContainer--detaillabel"
                  >
                    Quantity
                  </label>
                  {ItemStatus === "Out of Stock" ? (
                    <input
                      type="number"
                      id="itemQuantity"
                      value={ItemQuantity}
                      onChange={(e) => setItemQuantity(e.target.value)}
                      className="InventoryEdit__FormContainer--detailinput"
                      placeholder="0"
                      disabled
                    />
                  ) : (
                    <input
                      type="number"
                      id="itemQuantity"
                      value={ItemQuantity}
                      onChange={(e) => setItemQuantity(e.target.value)}
                      className="InventoryEdit__FormContainer--detailinput"
                      placeholder={ItemQuantity}
                    />
                  )}
                </div>

                {/* Warehouse Name */}
                <div className="InventoryEdit__FormContainer--inputblock">
                  <label
                    htmlFor="itemWarehouseName"
                    className="InventoryEdit__FormContainer--detaillabel"
                  >
                    Warehouse
                  </label>
                  <select
                    id="itemWarehouseName"
                    onChange={handleWarehouseChange}
                    className="InventoryEdit__FormContainer--detailinput"
                    value={WarehouseID}
                  >
                    {WarehouseList.map((warehouse) => (
                      <option key={warehouse?._id} value={warehouse?._id}>
                        {warehouse?.name}
                      </option>
                    ))}
                  </select>
                  {/* <input
                    type="text"
                    id="itemWarehouseName"
                    placeholder={WarehouseName}
                    value={WarehouseName}
                    onChange={(e) => setWarehouseName(e.target.value)}
                    className="InventoryEdit__FormContainer--detailinput"
                  /> */}
                </div>

                {/* Warehouse ID */}
                {/* <div className="InventoryEdit__FormContainer--inputblock">
                  <label
                    htmlFor="itemWarehouseId"
                    className="InventoryEdit__FormContainer--detaillabel"
                  >
                    Warehouse ID
                  </label>
                  <input
                    type="text"
                    id="itemWarehouseId"
                    placeholder={WarehouseID}
                    value={WarehouseID}
                    onChange={(e) => setWarehouseID(e.target.value)}
                    className="InventoryEdit__FormContainer--detailinput"
                  />
                </div> */}
              </div>
            </div>

            {/* Button Container */}
            <div className="InventoryEdit__ButtonContainer">
              <button
                onClick={() => navigate("/inventory")}
                className="InventoryEdit__ButtonContainer--cancelbutton"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateInventory}
                className="InventoryEdit__ButtonContainer--savebutton"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default InventoryEdit;
