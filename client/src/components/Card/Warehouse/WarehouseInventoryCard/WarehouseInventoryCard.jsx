import { NavLink } from "react-router-dom";

function WarehouseInventoryCard({ WarehouseInventoryInfo }) {
  return (
    <>
      <h1>This is WarehouseInventoryCard</h1>
      <NavLink to={`/inventory/${WarehouseInventoryInfo?._id}`}>
        <h1>{WarehouseInventoryInfo?.name}</h1>
      </NavLink>
    </>
  );
}

export default WarehouseInventoryCard;
