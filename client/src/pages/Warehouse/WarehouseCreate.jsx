import "./WarehouseCreate.scss";
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

    if (
      !WarehouseName ||
      !WarehouseAddress ||
      !WarehouseCity ||
      !WarehouseCountry ||
      !ContactName ||
      !ContactPosition ||
      !ContactPhone ||
      !ContactEmail
    ) {
      enqueueSnackbar("Missing Mandatory Field!", {
        variant: "error",
      });
    } else {
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
    }
  };

  return (
    <>
      <NavBar />
      <div className="WarehouseCreate__Container">
        {/* WarehouseCreate Title */}
        <div className="WarehouseCreate__TitleContainer">
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/warehouse");
            }}
            src={ArrowBack}
            alt="Back Arrow"
            className="WarehouseCreate__TitleContainer--backicon"
          />
          <div className="WarehouseCreate__TitleContainer--title">
            Add New Warehouse
          </div>
        </div>

        {/* Warehouse Create Form  */}
        <div className="WarehouseCreate__InputFormContainer">
          {/* Form Input Container */}
          <div className="WarehouseCreate__FormContainer">
            {/* Warehouse Details */}
            <div className="WarehouseCreate__FormContainer--warehousedetailsection">
              <div className="WarehouseCreate__FormContainer--detailtitle">
                Warehouse Details
              </div>

              {/* Warehouse Name */}
              <div className="WarehouseCreate__FormContainer--inputblock">
                <label
                  htmlFor="warehouseName"
                  className="WarehouseCreate__FormContainer--detaillabel"
                >
                  Warehouse Name
                </label>
                <input
                  type="text"
                  id="warehouseName"
                  placeholder="Warehouse Name"
                  value={WarehouseName}
                  onChange={(e) => setWarehouseName(e.target.value)}
                  required
                  htmlFor="warehouseName"
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Warehouse Address */}
              <div className="WarehouseCreate__FormContainer--inputblock">
                <label
                  htmlFor="warehouseAddress"
                  className="WarehouseCreate__FormContainer--detaillabel"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="warehouseAddress"
                  placeholder="Street Address"
                  value={WarehouseAddress}
                  onChange={(e) => setWarehouseAddress(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Warehouse City */}
              <div className="WarehouseCreate__FormContainer--inputblock">
                <label
                  htmlFor="warehouseCity"
                  className="WarehouseCreate__FormContainer--detaillabel"
                >
                  City
                </label>
                <input
                  type="text"
                  id="warehouseCity"
                  placeholder="City"
                  value={WarehouseCity}
                  onChange={(e) => setWarehouseCity(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Warehouse Country */}
              <div className="WarehouseCreate__FormContainer--inputblock">
                <label
                  htmlFor="warehouseCountry"
                  className="WarehouseCreate__FormContainer--detaillabel"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="warehouseCountry"
                  placeholder="Country"
                  value={WarehouseCountry}
                  onChange={(e) => setWarehouseCountry(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="WarehouseCreate__FormContainer--contactdetailsection">
              <div className="WarehouseCreate__FormContainer--detailtitle">
                Contact Details
              </div>

              {/* Contact Name */}
              <div className="WarehouseCreate__FormContainer--inputblock">
                <label
                  htmlFor="contactName"
                  className="WarehouseCreate__FormContainer--detaillabel"
                >
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  placeholder="Contact Name"
                  value={ContactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Contact Position */}
              <div className="WarehouseCreate__FormContainer--inputblock">
                <label
                  htmlFor="contactPosition"
                  className="WarehouseCreate__FormContainer--detaillabel"
                >
                  Position
                </label>
                <input
                  type="text"
                  id="contactPosition"
                  placeholder="Position"
                  value={ContactPosition}
                  onChange={(e) => setContactPosition(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Contact Phone Number */}
              <div className="WarehouseCreate__FormContainer--inputblock">
                <label
                  htmlFor="contactPhone"
                  className="WarehouseCreate__FormContainer--detaillabel"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="contactPhone"
                  placeholder="Phone Number"
                  value={ContactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Contact Phone Email */}
              <div className="WarehouseCreate__FormContainer--inputblock">
                <label
                  htmlFor="contactEmail"
                  className="WarehouseCreate__FormContainer--detaillabel"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="contactEmail"
                  placeholder="Email"
                  value={ContactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>
            </div>
          </div>

          {/* Button Input Container */}
          <div className="WarehouseCreate__ButtonContainer">
            <button
              onClick={() => navigate("/warehouse")}
              className="WarehouseCreate__ButtonContainer--cancelbutton"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateWarehouse}
              className="WarehouseCreate__ButtonContainer--createbutton"
            >
              + Add New Warehouse
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WarehouseCreate;
