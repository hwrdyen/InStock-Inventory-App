import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
  const [Loading, setLoading] = useState(false);
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
          setLoading(false);
        })
      )
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

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

      <h1>This is WarehouseDetail for {warehouseID}</h1>
      <h1>Warehouse Info: </h1>
      <div>
        {Loading ? (
          <Spinner />
        ) : (
          <>
            <h1>Warehouse Name: {SingleWarehouseInfo?.name}</h1>
            <NavLink to={`/warehouse/edit/${SingleWarehouseInfo?._id}`}>
              Edit
            </NavLink>
            <h1>Warehouse Address: {SingleWarehouseInfo?.address}</h1>
            <h1>
              Contact Name: {SingleWarehouseInfo?.contact?.name}{" "}
              {SingleWarehouseInfo?.contact?.position}
            </h1>
            <h1>
              Contact Information: {SingleWarehouseInfo?.contact?.phone}{" "}
              {SingleWarehouseInfo?.contact?.email}
            </h1>

            <h1>InventoryList:</h1>
            <div>
              <WarehouseInventoryCardList
                WarehouseInventoriesInfo={WarehouseInventoriesInfo}
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
