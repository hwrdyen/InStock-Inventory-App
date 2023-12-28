import { NavLink } from "react-router-dom";

function InventoryCard({ SingleInventoryInfo }) {
  return (
    <>
      <h1>This is InventoryCard</h1>

      <NavLink to={`/inventory/${SingleInventoryInfo?._id}`}>
        <div>{SingleInventoryInfo?.name}</div>
      </NavLink>
      <NavLink to={`/inventory/edit/${SingleInventoryInfo?._id}`}>Edit</NavLink>
    </>
  );
}

export default InventoryCard;
