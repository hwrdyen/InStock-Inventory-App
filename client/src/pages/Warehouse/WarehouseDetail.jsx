import "./WarehouseDetail.scss";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";
import WarehouseInventoryCardList from "../../components/CardList/Warehouse/WarehouseInventoryCardList/WarehouseInventoryCardList";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";

function WarehouseDetail() {
  const { warehouseID } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [Loading, setLoading] = useState(false);
  const [UpdateWarehouseInventoriesData, setUpdateWarehouseInventoriesData] =
    useState(false);
  const [SingleWarehouseInfo, setSingleWarehouseInfo] = useState([]);
  const [WarehouseInventoriesInfo, setWarehouseInventoriesInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    const WarehouseRequest = axios.get(
      `https://instock-inventory-be.onrender.com/warehouse/${warehouseID}`
    );
    const InventoryRequest = axios.get(
      `https://instock-inventory-be.onrender.com/inventory/warehouse/${warehouseID}`
    );

    axios
      .all([WarehouseRequest, InventoryRequest])
      .then(
        axios.spread((...res) => {
          setSingleWarehouseInfo(res[0]?.data);
          setWarehouseInventoriesInfo(res[1]?.data?.data);
          setUpdateWarehouseInventoriesData(false);
          setLoading(false);
        })
      )
      .catch((error) => {
        enqueueSnackbar("Error", {
          variant: "error",
        });
        console.log(error);
        navigate("/*");
        setLoading(false);
      });
  }, [UpdateWarehouseInventoriesData]);

  return (
    <>
      <NavBar />
      <div>
        {Loading ? (
          <Spinner />
        ) : (
          <div className="WarehouseDetail__Container">
            <div className="WarehouseDetail__TitleInfo">
              {/* Warehouse Detail Title */}
              <div className="WarehouseDetail__TitleContainer">
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/warehouse");
                  }}
                  src={ArrowBack}
                  alt="Back Arrow"
                  className="WarehouseDetail__TitleContainer--backicon"
                />
                <div className="WarehouseDetail__TitleContainer--title">
                  {SingleWarehouseInfo?.name}
                </div>
                <NavLink
                  to={`/warehouse/edit/${SingleWarehouseInfo?._id}`}
                  className="WarehouseDetail__TitleContainer--editlink"
                >
                  <div className="WarehouseDetail__TitleContainer--editblock">
                    <img
                      src={EditIcon}
                      alt="Edit Icon"
                      className="WarehouseDetail__TitleContainer--editicon"
                    />
                    <div className="WarehouseDetail__TitleContainer--edittitle">
                      Edit
                    </div>
                  </div>
                </NavLink>
              </div>

              {/* Warehouse Detail Info */}
              <div className="WarehouseDetail__InfoContainer">
                {/* Warehouse Address */}
                <div className="WarehouseDetail__InfoContainer--addresssection">
                  <div className="WarehouseDetail__InfoContainer--addresstitle">
                    WAREHOUSE ADDRESS:
                  </div>
                  <div className="WarehouseDetail__InfoContainer--addresscontent">
                    <div className="WarehouseDetail__InfoContainer--addresscontentaddress">
                      {SingleWarehouseInfo?.address},&#160;
                    </div>
                    <div className="WarehouseDetail__InfoContainer--addresscontentcitycountry">
                      {SingleWarehouseInfo?.city},&#160;
                      {SingleWarehouseInfo?.country}
                    </div>
                  </div>
                </div>

                {/* Contact Name & Contact Information */}
                <div className="WarehouseDetail__InfoContainer--contactsection">
                  {/* Contact Name */}
                  <div className="WarehouseDetail__InfoContainer--contactnamesection">
                    <div className="WarehouseDetail__InfoContainer--contactnametitle">
                      CONTACT NAME:
                    </div>
                    <div className="WarehouseDetail__InfoContainer--contactnameblock">
                      <div className="WarehouseDetail__InfoContainer--contactnamecontent">
                        {SingleWarehouseInfo?.contact?.name}
                      </div>
                      <div className="WarehouseDetail__InfoContainer--contactpositioncontent">
                        {SingleWarehouseInfo?.contact?.position}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="WarehouseDetail__InfoContainer--contactinfosection">
                    <div className="WarehouseDetail__InfoContainer--contactinfotitle">
                      CONTACT INFORMATION:
                    </div>
                    <div className="WarehouseDetail__InfoContainer--contactinfoblock">
                      <div className="WarehouseDetail__InfoContainer--contactphonecontent">
                        {SingleWarehouseInfo?.contact?.phone}
                      </div>
                      <div className="WarehouseDetail__InfoContainer--contactemailcontent">
                        {SingleWarehouseInfo?.contact?.email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warehouse-Inventory CardList */}
            <div>
              <WarehouseInventoryCardList
                WarehouseInventoriesInfo={WarehouseInventoriesInfo}
                setUpdateWarehouseInventoriesData={
                  setUpdateWarehouseInventoriesData
                }
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default WarehouseDetail;
