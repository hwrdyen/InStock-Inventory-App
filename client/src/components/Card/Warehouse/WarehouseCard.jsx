import { NavLink } from "react-router-dom";

function WarehouseCard({ SingleWarehouseInfo }) {
  return (
    <>
      <h3>This is Warehouse Card:</h3>

      <NavLink to={`/warehouse/${SingleWarehouseInfo?._id}`}>
        <h3>{SingleWarehouseInfo?.name}</h3>
      </NavLink>

      <NavLink to={`/warehouse/edit/${SingleWarehouseInfo?._id}`}>
        <h3>Edit</h3>
      </NavLink>
    </>
  );
}

export default WarehouseCard;
