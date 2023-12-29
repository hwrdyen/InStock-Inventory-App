import { NavLink } from "react-router-dom";

// Component
import WarehouseCard from "../../Card/Warehouse/WarehouseCard";

function WarehouseCardList({ AllWarehouseInfo, setUpdateWarehouseData }) {
  return (
    <>
      <div>Warehouses</div>
      <NavLink to={"/warehouse/create"}>
        <div>+Add New Warehouse</div>
      </NavLink>

      <div>
        {AllWarehouseInfo.map((SingleWarehouseInfo) => (
          <WarehouseCard
            key={SingleWarehouseInfo._id}
            SingleWarehouseInfo={SingleWarehouseInfo}
            setUpdateWarehouseData={setUpdateWarehouseData}
          />
        ))}
      </div>
    </>
  );
}

export default WarehouseCardList;
