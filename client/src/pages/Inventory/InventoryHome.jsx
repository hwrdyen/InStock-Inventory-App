import { useState, useEffect } from "react";
import axios from "axios";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import InventoryCardList from "../../components/CardList/Inventory/InventoryCardList";
import Spinner from "../../components/Spinner/Spinner";

function InventoryHome() {
  const [Loading, setLoading] = useState(false);
  const [UpdateInventoryData, setUpdateInventoryData] = useState(false);
  const [AllInventoryInfo, setAllInventoryInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:8000/inventory")
      .then((response) => {
        setAllInventoryInfo(response.data.data);
        setUpdateInventoryData(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [UpdateInventoryData]);

  return (
    <>
      <NavBar />
      <div>This is InventoryHome</div>
      <div>InventoryCardList:</div>
      <div>
        {Loading ? (
          <Spinner />
        ) : (
          <InventoryCardList
            AllInventoryInfo={AllInventoryInfo}
            setUpdateInventoryData={setUpdateInventoryData}
          />
        )}
      </div>

      <Footer />
    </>
  );
}

export default InventoryHome;
