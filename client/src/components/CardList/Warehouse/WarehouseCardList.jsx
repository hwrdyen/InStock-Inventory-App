import { NavLink } from "react-router-dom";

// Component
import WarehouseCard from "../../Card/Warehouse/WarehouseCard";

function WarehouseCardList({ AllWarehouseInfo }) {
  return (
    <>
      <h1>Warehouses</h1>
      <NavLink to={"/warehouse/create"}>
        <div>+Add New Warehouse</div>
      </NavLink>

      <div>
        {AllWarehouseInfo.map((SingleWarehouseInfo) => (
          <WarehouseCard
            key={SingleWarehouseInfo._id}
            SingleWarehouseInfo={SingleWarehouseInfo}
          />
        ))}
      </div>
    </>
  );
}

export default WarehouseCardList;
