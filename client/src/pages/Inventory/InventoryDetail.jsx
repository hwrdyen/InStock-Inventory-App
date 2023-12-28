import { useParams } from "react-router-dom";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function InventoryDetail() {
  const { inventoryID } = useParams();
  return (
    <>
      <NavBar />
      <h1>This is InventoryDetail! {inventoryID}</h1>
      <Footer />
    </>
  );
}

export default InventoryDetail;
