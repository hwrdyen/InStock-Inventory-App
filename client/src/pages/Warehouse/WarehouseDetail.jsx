import { useParams } from "react-router-dom";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function WarehouseDetail() {
  const { warehouseID } = useParams();
  return (
    <>
      <NavBar />
      <h1>This is WarehouseDetail! {warehouseID}</h1>
      <Footer />
    </>
  );
}

export default WarehouseDetail;
