import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function InventoryEdit() {
  const { inventoryID } = useParams();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [CurrentInventoryInfo, setCurrentInventoryInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:8000/inventory/${inventoryID}`)
      .then((response) => {
        setCurrentInventoryInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
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

      <h1>Edit Inventory Item for {inventoryID}</h1>

      <div>
        {Loading ? (
          <Spinner />
        ) : (
          <>
            {/* Item Details */}
            <h1>Item Details</h1>
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              placeholder={CurrentInventoryInfo?.name}
            />

            <label htmlFor="itemDescription">Description</label>
            <textarea
              type="text"
              id="itemDescription"
              name="itemDescription"
              placeholder={CurrentInventoryInfo?.description}
            />

            <label htmlFor="itemCategory">Category</label>
            <input
              type="text"
              id="itemCategory"
              name="itemCategory"
              placeholder={CurrentInventoryInfo?.category}
            />

            {/* Item Availability */}
            <h1>Item Availability</h1>
            <input type="radio" id="itemStatus-instock" name="itemStatus" />
            <label htmlFor="itemStatus-instock">In Stock</label>

            <input type="radio" id="itemStatus-outofstock" name="itemStatus" />
            <label htmlFor="itemStatus-outofstock">Out of Stock</label>

            <label htmlFor="itemQuantity">Quantity</label>
            <input
              type="number"
              id="itemQuantity"
              name="itemQuantity"
              placeholder={CurrentInventoryInfo?.quantity}
            />

            <label htmlFor="itemWarehouseName">Warehouse Name</label>
            <input
              type="text"
              id="itemWarehouseName"
              name="itemWarehouseName"
              placeholder={CurrentInventoryInfo?.warehouseName}
            />

            <label htmlFor="itemWarehouseId">Warehouse ID</label>
            <input
              type="text"
              id="itemWarehouseId"
              name="itemWarehouseId"
              placeholder={CurrentInventoryInfo?.warehouseID}
            />

            <button>Cancel</button>
            <button>+ Add Item</button>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default InventoryEdit;
