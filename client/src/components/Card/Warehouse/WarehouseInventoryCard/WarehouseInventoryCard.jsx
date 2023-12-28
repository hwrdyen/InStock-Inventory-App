import { NavLink } from "react-router-dom";

// Assets
import EditIcon from "../../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../../assets/Icons/delete_outline-24px.svg";

function WarehouseInventoryCard({ WarehouseInventoryInfo }) {
  return (
    <>
      <h1>This is WarehouseInventoryCard</h1>
      <NavLink to={`/inventory/${WarehouseInventoryInfo?._id}`}>
        <h1>{WarehouseInventoryInfo?.name}</h1>
      </NavLink>

      <img src={DeleteIcon} alt="Delete Icon" />
      <NavLink to={`/inventory/edit/${WarehouseInventoryInfo?._id}`}>
        <img src={EditIcon} alt="Edit Icon" />
      </NavLink>
    </>
  );
}

export default WarehouseInventoryCard;
