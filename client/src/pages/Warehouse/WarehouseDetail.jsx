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
