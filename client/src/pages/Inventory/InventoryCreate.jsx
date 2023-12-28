import { useNavigate } from "react-router-dom";
// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function InventoryCreate() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div
        onClick={(e) => {
          e.preventDefault();
          navigate("/inventory");
        }}
      >{`---back to previous page (holder)---`}</div>

      <h1>Add New Inventory Item</h1>

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

export default InventoryCreate;
