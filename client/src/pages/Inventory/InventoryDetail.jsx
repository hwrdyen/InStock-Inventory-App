import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";

// Assets
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";

function InventoryDetail() {
  const { inventoryID } = useParams();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [SingleInventoryInfo, setSingleInventoryInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:8000/inventory/${inventoryID}`)
      .then((response) => {
        setSingleInventoryInfo(response.data);
        setLoading(false);
      })
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
          navigate("/inventory");
        }}
        src={ArrowBack}
        alt="Back Arrow"
      />
      <h1>This is InventoryDetail! {inventoryID}</h1>
      <div>
        <h1>Inventory Detail: </h1>
        <div>
          {Loading ? (
            <Spinner />
          ) : (
            <>
              <h1>{SingleInventoryInfo?.name}</h1>
              <NavLink to={`/inventory/edit/${SingleInventoryInfo?._id}`}>
                Edit
              </NavLink>
              <h1>{SingleInventoryInfo?.description}</h1>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InventoryDetail;
