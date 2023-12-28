import { useNavigate, useParams } from "react-router-dom";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function WarehouseEdit() {
  const { warehouseID } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <img
        onClick={(e) => {
          e.preventDefault();
          navigate("/warehouse");
        }}
        src={ArrowBack}
        alt="Back Arrow"
      />
      <h1>Edit Warehouse for {warehouseID}</h1>

      {/* WArehouse Details */}
      <h1>Warehouse Details</h1>
      <label htmlFor="warehouseName">Warehouse Name</label>
      <input type="text" id="warehouseName" name="warehouseName" />

      <label htmlFor="warehouseAddress">Street Address</label>
      <input type="text" id="warehouseAddress" name="warehouseAddress" />

      <label htmlFor="warehouseCity">City</label>
      <input type="text" id="warehouseCity" name="warehouseCity" />

      <label htmlFor="warehouseCountry">Country</label>
      <input type="text" id="warehouseCountry" name="warehouseCountry" />

      {/* Contact Details */}
      <h1>Contact Details</h1>
      <label htmlFor="contactName">Contact Name</label>
      <input type="text" id="contactName" name="contactName" />

      <label htmlFor="contactPosition">Position</label>
      <input type="text" id="contactPosition" name="contactPosition" />

      <label htmlFor="contactPhone">Phone Number</label>
      <input type="text" id="contactPhone" name="contactPhone" />

      <label htmlFor="contactEmail">Email</label>
      <input type="text" id="contactEmail" name="contactEmail" />

      <button>Cancel</button>
      <button>Save</button>

      <Footer />
    </>
  );
}

export default WarehouseEdit;
