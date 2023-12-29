import { useState, useEffect } from "react";
import axios from "axios";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import WarehouseCardList from "../../components/CardList/Warehouse/WarehouseCardList";
import Spinner from "../../components/Spinner/Spinner";

function WarehouseHome() {
  const [Loading, setLoading] = useState(false);
  const [UpdateWarehouseData, setUpdateWarehouseData] = useState(false);
  const [AllWarehouseInfo, setAllWarehouseInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:8000/warehouse")
      .then((response) => {
        setAllWarehouseInfo(response.data.data);
        setUpdateWarehouseData(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [UpdateWarehouseData]);

  return (
    <>
      <NavBar />
      <div>This is WarehouseHome</div>
      <div>WarehouseCardList: </div>
      <div>
        {Loading ? (
          <Spinner />
        ) : (
          <WarehouseCardList
            AllWarehouseInfo={AllWarehouseInfo}
            setUpdateWarehouseData={setUpdateWarehouseData}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default WarehouseHome;
