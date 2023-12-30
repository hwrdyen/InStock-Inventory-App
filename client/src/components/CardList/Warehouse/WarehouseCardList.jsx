import "./WarehouseCardList.scss";
import { NavLink } from "react-router-dom";

// Component
import WarehouseCard from "../../Card/Warehouse/WarehouseCard";

function WarehouseCardList({ AllWarehouseInfo, setUpdateWarehouseData }) {
  return (
    <div className="CardList__Container">
      <div>
        {AllWarehouseInfo.map((SingleWarehouseInfo) => (
          <WarehouseCard
            key={SingleWarehouseInfo._id}
            SingleWarehouseInfo={SingleWarehouseInfo}
            setUpdateWarehouseData={setUpdateWarehouseData}
          />
        ))}
      </div>
    </div>
  );
}

export default WarehouseCardList;
