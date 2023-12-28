import { NavLink } from "react-router-dom";

// Components
import InventoryCard from "../../Card/Inventory/InventoryCard";

function InventoryCardList({ AllInventoryInfo }) {
  return (
    <>
      <div>Inventory</div>
      <NavLink to={"/inventory/create"}>
        <div>+Add New Item</div>
      </NavLink>

      <div>
        {AllInventoryInfo.map((SingleInventoryInfo) => (
          <InventoryCard
            key={SingleInventoryInfo?._id}
            SingleInventoryInfo={SingleInventoryInfo}
          />
        ))}
      </div>
    </>
  );
}

export default InventoryCardList;
