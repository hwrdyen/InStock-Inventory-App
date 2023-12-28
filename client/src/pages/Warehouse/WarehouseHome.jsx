// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import WarehouseCardList from "../../components/CardList/Warehouse/WarehouseCardList";

function WarehouseHome() {
  return (
    <>
      <NavBar />
      <h1>This is WarehouseHome</h1>
      <h2>WarehouseCardList:</h2>
      <WarehouseCardList />
      <Footer />
    </>
  );
}

export default WarehouseHome;
