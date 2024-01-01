import "./WarehouseEdit.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function WarehouseEdit() {
  const { warehouseID } = useParams();
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

  useEffect(() => {
    axios
      .get(`https://instock-inventory-be.onrender.com/warehouse/${warehouseID}`)
      .then((response) => {
        setWarehouseName(response?.data?.name);
        setWarehouseAddress(response?.data?.address);
        setWarehouseCity(response?.data?.city);
        setWarehouseCountry(response?.data?.country);
        setContactName(response?.data?.contact?.name);
        setContactPosition(response?.data?.contact?.position);
        setContactPhone(response?.data?.contact?.phone);
        setContactEmail(response?.data?.contact?.email);
      });
  }, []);

  const handleUpdateWarehouse = () => {
    const UpdatedWarehouseData = {
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
        .put(
          `https://instock-inventory-be.onrender.com/warehouse/${warehouseID}`,
          UpdatedWarehouseData
        )
        .then(() => {
          enqueueSnackbar("Warehouse Edited successfully", {
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
      <div className="WarehouseEdit__Container">
        {/* WarehouseEdit Title */}
        <div className="WarehouseEdit__TitleContainer">
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/warehouse");
            }}
            src={ArrowBack}
            alt="Back Arrow"
            className="WarehouseEdit__TitleContainer--backicon"
          />
          <div className="WarehouseEdit__TitleContainer--title">
            Edit Warehouse
          </div>
        </div>

        {/* Warehouse Edit Form */}
        <div className="WarehouseEdit__InputFormContainer">
          {/* Form Input Container */}
          <div className="WarehouseEdit__FormContainer">
            {/* Warehouse Details */}
            <div className="WarehouseEdit__FormContainer--warehousedetailsection">
              <div className="WarehouseEdit__FormContainer--detailtitle">
                Warehouse Details
              </div>
              {/* Warehouse Name */}
              <div className="WarehouseEdit__FormContainer--inputblock">
                <label
                  htmlFor="warehouseName"
                  className="WarehouseEdit__FormContainer--detaillabel"
                >
                  Warehouse Name
                </label>
                <input
                  type="text"
                  id="warehouseName"
                  placeholder={WarehouseName}
                  value={WarehouseName}
                  onChange={(e) => setWarehouseName(e.target.value)}
                  required
                  htmlFor="warehouseName"
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Warehouse Address */}
              <div className="WarehouseEdit__FormContainer--inputblock">
                <label
                  htmlFor="warehouseAddress"
                  className="WarehouseEdit__FormContainer--detaillabel"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="warehouseAddress"
                  placeholder={WarehouseAddress}
                  value={WarehouseAddress}
                  onChange={(e) => setWarehouseAddress(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Warehouse City */}
              <div className="WarehouseEdit__FormContainer--inputblock">
                <label
                  htmlFor="warehouseCity"
                  className="WarehouseEdit__FormContainer--detaillabel"
                >
                  City
                </label>
                <input
                  type="text"
                  id="warehouseCity"
                  placeholder={WarehouseCity}
                  value={WarehouseCity}
                  onChange={(e) => setWarehouseCity(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Warehouse Country */}
              <div className="WarehouseEdit__FormContainer--inputblock">
                <label
                  htmlFor="warehouseCountry"
                  className="WarehouseEdit__FormContainer--detaillabel"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="warehouseCountry"
                  placeholder={WarehouseCountry}
                  value={WarehouseCountry}
                  onChange={(e) => setWarehouseCountry(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="WarehouseEdit__FormContainer--contactdetailsection">
              <div className="WarehouseEdit__FormContainer--detailtitle">
                Contact Details
              </div>

              {/* Contact Name */}
              <div className="WarehouseEdit__FormContainer--inputblock">
                <label
                  htmlFor="contactName"
                  className="WarehouseEdit__FormContainer--detaillabel"
                >
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  placeholder={ContactName}
                  value={ContactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Contact Position */}
              <div className="WarehouseEdit__FormContainer--inputblock">
                <label
                  htmlFor="contactPosition"
                  className="WarehouseEdit__FormContainer--detaillabel"
                >
                  Position
                </label>
                <input
                  type="text"
                  id="contactPosition"
                  placeholder={ContactPosition}
                  value={ContactPosition}
                  onChange={(e) => setContactPosition(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Contact Phone */}
              <div className="WarehouseEdit__FormContainer--inputblock">
                <label
                  htmlFor="contactPhone"
                  className="WarehouseEdit__FormContainer--detaillabel"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="contactPhone"
                  placeholder={ContactPhone}
                  value={ContactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  required
                  className="WarehouseCreate__FormContainer--detailinput"
                />
              </div>

              {/* Contact Email */}
              <div className="WarehouseEdit__FormContainer--inputblock">
                <label
                  htmlFor="contactEmail"
                  className="WarehouseEdit__FormContainer--detaillabel"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="contactEmail"
                  placeholder={ContactEmail}
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
              className="WarehouseEdit__ButtonContainer--cancelbutton"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateWarehouse}
              className="WarehouseEdit__ButtonContainer--savebutton"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WarehouseEdit;
