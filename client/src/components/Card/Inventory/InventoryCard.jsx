import { NavLink } from "react-router-dom";

// Assets
import EditIcon from "../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../assets/Icons/delete_outline-24px.svg";

function InventoryCard({ SingleInventoryInfo }) {
  return (
    <>
      <div>This is InventoryCard</div>

      <NavLink to={`/inventory/${SingleInventoryInfo?._id}`}>
        <div>{SingleInventoryInfo?.name}</div>
      </NavLink>

      <img src={DeleteIcon} alt="Delete Icon" />
      <NavLink to={`/inventory/edit/${SingleInventoryInfo?._id}`}>
        <img src={EditIcon} alt="Edit Icon" />
      </NavLink>
    </>
  );
}

export default InventoryCard;
