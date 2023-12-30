import "./WarehouseHome.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
      <div className="WarehouseHome__Container">
        <div className="WarehouseHome__TitleContainer">
          <div className="WarehouseHome__Title">Warehouses</div>
          <div className="WarehouseHome__TitleFunction">
            <input
              type="search"
              placeholder="Search..."
              className="WarehouseHome__TitleFunction--search"
            ></input>
            <NavLink
              to={"/warehouse/create"}
              className="WarehouseHome__TitleFunction--buttonlink"
            >
              <button className="WarehouseHome__TitleFunction--button">
                + Add New Warehouse
              </button>
            </NavLink>
          </div>
        </div>
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
