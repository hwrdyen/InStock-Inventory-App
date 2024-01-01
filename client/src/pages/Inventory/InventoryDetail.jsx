import "./InventoryDetail.scss";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";

function InventoryDetail() {
  const { inventoryID } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [Loading, setLoading] = useState(false);
  const [SingleInventoryInfo, setSingleInventoryInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://instock-inventory-be.onrender.com/inventory/${inventoryID}`)
      .then((response) => {
        setSingleInventoryInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("Error", {
          variant: "error",
        });
        console.log(error);
        navigate("/*");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        {Loading ? (
          <Spinner />
        ) : (
          <div className="InventoryDetail__Container">
            <div className="InventoryDetail__TitleInfo">
              {/* Inventory Detail Title */}
              <div className="InventoryDetail__TitleContainer">
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/inventory");
                  }}
                  src={ArrowBack}
                  alt="Back Arrow"
                  className="InventoryDetail__TitleContainer--backicon"
                />
                <div className="InventoryDetail__TitleContainer--title">
                  {SingleInventoryInfo?.name}
                </div>
                <NavLink
                  to={`/inventory/edit/${SingleInventoryInfo?._id}`}
                  className="InventoryDetail__TitleContainer--editlink"
                >
                  <div className="InventoryDetail__TitleContainer--editblock">
                    <img
                      src={EditIcon}
                      alt="Edit Icon"
                      className="InventoryDetail__TitleContainer--editicon"
                    />
                    <div className="InventoryDetail__TitleContainer--edittitle">
                      Edit
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>

            {/* Inventory Detail Info */}
            <div className="InventoryDetail__InfoContainer">
              {/* Inventory Description & Category */}
              <div className="InventoryDetail__InfoContainer--infosection">
                {/* Inventory Description */}
                <div className="InventoryDetail__InfoContainer--infoblock">
                  <div className="InventoryDetail__InfoContainer--infotitle">
                    ITEM DESCRIPTION:
                  </div>
                  <div className="InventoryDetail__InfoContainer--infocontent">
                    {SingleInventoryInfo?.description}
                  </div>
                </div>

                {/* Category */}
                <div className="InventoryDetail__InfoContainer--infoblock">
                  <div className="InventoryDetail__InfoContainer--infotitle">
                    CATEGORY:
                  </div>
                  <div className="InventoryDetail__InfoContainer--infocontent">
                    {SingleInventoryInfo?.category}
                  </div>
                </div>
              </div>

              {/* Status & QTY & Warehouse */}
              <div className="InventoryDetail__InfoContainer--statussection">
                {/* Status & Warehouse */}
                <div className="InventoryDetail__InfoContainer--statusblock">
                  {/* Status */}
                  <div className="InventoryDetail__InfoContainer--statussubblock">
                    <div className="InventoryDetail__InfoContainer--statustitle">
                      STATUS
                    </div>
                    {SingleInventoryInfo?.status === "Out of Stock" ? (
                      <div className="InventoryDetail__InfoContainer--statuscontent InventoryDetail__InfoContainer--outofstock">
                        {SingleInventoryInfo?.status}
                      </div>
                    ) : (
                      <div className="InventoryDetail__InfoContainer--statuscontent InventoryDetail__InfoContainer--instock">
                        {SingleInventoryInfo?.status}
                      </div>
                    )}
                  </div>

                  {/* Warehouse */}
                  <div className="InventoryDetail__InfoContainer--statussubblock">
                    <div className="InventoryDetail__InfoContainer--statustitle">
                      WAREHOUSE:
                    </div>
                    <div className="InventoryDetail__InfoContainer--statuscontent">
                      {SingleInventoryInfo?.warehouseName}
                    </div>
                  </div>
                </div>

                {/* QTY */}
                <div className="InventoryDetail__InfoContainer--qtyblock">
                  <div className="InventoryDetail__InfoContainer--statustitle">
                    QUANTITY:
                  </div>
                  <div className="InventoryDetail__InfoContainer--statuscontent">
                    {SingleInventoryInfo?.quantity}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default InventoryDetail;
