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
      `http://localhost:8000/warehouse/${warehouseID}`
    );
    const InventoryRequest = axios.get(
      `http://localhost:8000/inventory/warehouse/${warehouseID}`
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
      <img
        onClick={(e) => {
          e.preventDefault();
          navigate("/warehouse");
        }}
        src={ArrowBack}
        alt="Back Arrow"
      />

      <div>This is WarehouseDetail for {warehouseID}</div>
      <div>Warehouse Info: </div>
      <div>
        {Loading ? (
          <Spinner />
        ) : (
          <>
            <div>Warehouse Name: {SingleWarehouseInfo?.name}</div>
            <NavLink to={`/warehouse/edit/${SingleWarehouseInfo?._id}`}>
              Edit
            </NavLink>
            <div>Warehouse Address: {SingleWarehouseInfo?.address}</div>
            <div>
              Contact Name: {SingleWarehouseInfo?.contact?.name}{" "}
              {SingleWarehouseInfo?.contact?.position}
            </div>
            <div>
              Contact Information: {SingleWarehouseInfo?.contact?.phone}{" "}
              {SingleWarehouseInfo?.contact?.email}
            </div>

            <div>InventoryList:</div>
            <div>
              <WarehouseInventoryCardList
                WarehouseInventoriesInfo={WarehouseInventoriesInfo}
                setUpdateWarehouseInventoriesData={
                  setUpdateWarehouseInventoriesData
                }
              />
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default WarehouseDetail;
