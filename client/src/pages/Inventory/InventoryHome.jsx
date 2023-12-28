// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import InventoryCardList from "../../components/CardList/Inventory/InventoryCardList";

function InventoryHome() {
  return (
    <>
      <NavBar />
      <h1>This is InventoryHome</h1>
      <h2>InventoryCardList:</h2>
      <InventoryCardList />
      <Footer />
    </>
  );
}

export default InventoryHome;
