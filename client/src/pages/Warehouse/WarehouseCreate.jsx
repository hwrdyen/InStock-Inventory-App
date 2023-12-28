import { useNavigate } from "react-router-dom";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function WarehouseCreate() {
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
      <h1>Add New Warehouse</h1>

      {/* WArehouse Details */}
      <h1>Warehouse Details</h1>
      <label htmlFor="warehouseName">Warehouse Name</label>
      <input type="text" id="warehouseName" placeholder="Warehouse Name" />

      <label htmlFor="warehouseAddress">Street Address</label>
      <input type="text" id="warehouseAddress" placeholder="Street Address" />

      <label htmlFor="warehouseCity">City</label>
      <input type="text" id="warehouseCity" placeholder="City" />

      <label htmlFor="warehouseCountry">Country</label>
      <input type="text" id="warehouseCountry" placeholder="Country" />

      {/* Contact Details */}
      <h1>Contact Details</h1>
      <label htmlFor="contactName">Contact Name</label>
      <input type="text" id="contactName" placeholder="Contact Name" />

      <label htmlFor="contactPosition">Position</label>
      <input type="text" id="contactPosition" placeholder="Position" />

      <label htmlFor="contactPhone">Phone Number</label>
      <input type="text" id="contactPhone" placeholder="Phone Number" />

      <label htmlFor="contactEmail">Email</label>
      <input type="text" id="contactEmail" placeholder="Email" />

      <button>Cancel</button>
      <button>+ Add New Warehouse</button>

      <Footer />
    </>
  );
}

export default WarehouseCreate;
