import { NavLink } from "react-router-dom";

// Components
import InventoryCard from "../../Card/Inventory/InventoryCard";

function InventoryCardList({ AllInventoryInfo, setUpdateInventoryData }) {
  return (
    <>
      <div>
        {AllInventoryInfo.map((SingleInventoryInfo) => (
          <InventoryCard
            key={SingleInventoryInfo?._id}
            SingleInventoryInfo={SingleInventoryInfo}
            setUpdateInventoryData={setUpdateInventoryData}
          />
        ))}
      </div>
    </>
  );
}

export default InventoryCardList;
