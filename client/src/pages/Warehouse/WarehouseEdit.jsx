import { useNavigate, useParams } from "react-router-dom";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function WarehouseEdit() {
  const { warehouseID } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div
        onClick={(e) => {
          e.preventDefault();
          navigate("/warehouse");
        }}
      >{`---back to previous page (holder)---`}</div>
      <h1>Edit Warehouse for {warehouseID}</h1>

      {/* WArehouse Details */}
      <h1>Warehouse Details</h1>
      <label htmlFor="warehouseName">Warehouse Name</label>
      <input type="text" id="warehouseName" />

      <label htmlFor="warehouseAddress">Street Address</label>
      <input type="text" id="warehouseAddress" />

      <label htmlFor="warehouseCity">City</label>
      <input type="text" id="warehouseCity" />

      <label htmlFor="warehouseCountry">Country</label>
      <input type="text" id="warehouseCountry" />

      {/* Contact Details */}
      <h1>Contact Details</h1>
      <label htmlFor="contactName">Contact Name</label>
      <input type="text" id="contactName" />

      <label htmlFor="contactPosition">Position</label>
      <input type="text" id="contactPosition" />

      <label htmlFor="contactPhone">Phone Number</label>
      <input type="text" id="contactPhone" />

      <label htmlFor="contactEmail">Email</label>
      <input type="text" id="contactEmail" />

      <button>Cancel</button>
      <button>Save</button>

      <Footer />
    </>
  );
}

export default WarehouseEdit;
