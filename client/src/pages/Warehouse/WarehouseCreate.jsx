import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function WarehouseCreate() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [WarehouseName, setWarehouseName] = useState("");
  const [WarehouseAddress, setWarehouseAddress] = useState("");
  const [WarehouseCity, setWarehouseCity] = useState("");
  const [WarehouseCountry, setWarehouseCountry] = useState("");
  const [ContactName, setContactName] = useState("");
  const [ContactPosition, setContactPosition] = useState("");
  const [ContactPhone, setContactPhone] = useState("");
  const [ContactEmail, setContactEmail] = useState("");

  const handleCreateWarehouse = () => {
    const CreatedWarehouseData = {
      name: WarehouseName,
      address: WarehouseAddress,
      city: WarehouseCity,
      country: WarehouseCountry,
      contact: {
        name: ContactName,
        position: ContactPosition,
        phone: ContactPhone,
        email: ContactEmail,
      },
    };

    axios
      .post(`http://localhost:8000/warehouse`, CreatedWarehouseData)
      .then(() => {
        enqueueSnackbar("Warehouse Created successfully", {
          variant: "success",
        });
        navigate("/warehouse");
      })
      .catch((error) => {
        enqueueSnackbar("Error", {
          variant: "error",
        });
        console.log(error);
      });
  };

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
      <div>Add New Warehouse</div>

      {/* Warehouse Details */}
      <div>Warehouse Details</div>
      <label htmlFor="warehouseName">Warehouse Name</label>
      <input
        type="text"
        id="warehouseName"
        placeholder="Warehouse Name"
        value={WarehouseName}
        onChange={(e) => setWarehouseName(e.target.value)}
        required
      />

      <label htmlFor="warehouseAddress">Street Address</label>
      <input
        type="text"
        id="warehouseAddress"
        placeholder="Street Address"
        value={WarehouseAddress}
        onChange={(e) => setWarehouseAddress(e.target.value)}
        required
      />

      <label htmlFor="warehouseCity">City</label>
      <input
        type="text"
        id="warehouseCity"
        placeholder="City"
        value={WarehouseCity}
        onChange={(e) => setWarehouseCity(e.target.value)}
        required
      />

      <label htmlFor="warehouseCountry">Country</label>
      <input
        type="text"
        id="warehouseCountry"
        placeholder="Country"
        value={WarehouseCountry}
        onChange={(e) => setWarehouseCountry(e.target.value)}
        required
      />

      {/* Contact Details */}
      <div>Contact Details</div>
      <label htmlFor="contactName">Contact Name</label>
      <input
        type="text"
        id="contactName"
        placeholder="Contact Name"
        value={ContactName}
        onChange={(e) => setContactName(e.target.value)}
        required
      />

      <label htmlFor="contactPosition">Position</label>
      <input
        type="text"
        id="contactPosition"
        placeholder="Position"
        value={ContactPosition}
        onChange={(e) => setContactPosition(e.target.value)}
        required
      />

      <label htmlFor="contactPhone">Phone Number</label>
      <input
        type="text"
        id="contactPhone"
        placeholder="Phone Number"
        value={ContactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
        required
      />

      <label htmlFor="contactEmail">Email</label>
      <input
        type="text"
        id="contactEmail"
        placeholder="Email"
        value={ContactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
        required
      />

      <button onClick={() => navigate("/warehouse")}>Cancel</button>
      <button onClick={handleCreateWarehouse}>+ Add New Warehouse</button>

      <Footer />
    </>
  );
}

export default WarehouseCreate;
