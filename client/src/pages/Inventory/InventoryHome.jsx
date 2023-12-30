import "./InventoryHome.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
      <div className="InventoryHome__Container">
        <div className="InventoryHome__TitleContainer">
          <div className="InventoryHome__Title">Inventory</div>
          <div className="InventoryHome__TitleFunction">
            <input
              type="search"
              placeholder="Search..."
              className="InventoryHome__TitleFunction--search"
            ></input>
            <NavLink
              to={"/inventory/create"}
              className="InventoryHome__TitleFunction--buttonlink"
            >
              <button className="WarehouseHome__TitleFunction--button">
                + Add New Item
              </button>
            </NavLink>
          </div>
        </div>
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
