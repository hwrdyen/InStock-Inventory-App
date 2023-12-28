import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";

function InventoryEdit() {
  const { inventoryID } = useParams();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [CurrentInventoryInfo, setCurrentInventoryInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get(`http://localhost:8000/inventory/${inventoryID}`).then();
  }, []);
  return (
    <>
      <NavBar />
      <div
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >{`---back to previous page (holder)---`}</div>

      <h1>Edit Inventory Item for {inventoryID}</h1>

      {/* Item Details */}
      <h1>Item Details</h1>
      <label htmlFor="itemName">Item Name</label>
      <input type="text" id="itemName" />

      <label htmlFor="itemDescription">Description</label>
      <textarea type="text" id="itemDescription" />

      <label htmlFor="itemCategory">Category</label>
      <input type="text" id="itemCategory" />

      {/* Item Availability */}
      <h1>Item Availability</h1>
      <input type="radio" id="itemStatus-instock" name="itemStatus" />
      <label htmlFor="itemStatus-instock">In Stock</label>

      <input type="radio" id="itemStatus-outofstock" name="itemStatus" />
      <label htmlFor="itemStatus-outofstock">Out of Stock</label>

      <label htmlFor="itemQuantity">Quantity</label>
      <input type="number" id="itemQuantity" />

      <label htmlFor="itemWarehouseName">Warehouse Name</label>
      <input type="text" id="itemWarehouseName" />

      <label htmlFor="itemWarehouseId">Warehouse ID</label>
      <input type="text" id="itemWarehouseId" />

      <button>Cancel</button>
      <button>+ Add Item</button>

      <Footer />
    </>
  );
}

export default InventoryEdit;
