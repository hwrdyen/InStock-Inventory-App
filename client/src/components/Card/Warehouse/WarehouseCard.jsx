import { NavLink } from "react-router-dom";

// Assets
import EditIcon from "../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../assets/Icons/delete_outline-24px.svg";

function WarehouseCard({ SingleWarehouseInfo }) {
  return (
    <>
      <h3>This is Warehouse Card:</h3>

      <NavLink to={`/warehouse/${SingleWarehouseInfo?._id}`}>
        <h3>{SingleWarehouseInfo?.name}</h3>
      </NavLink>

      <img src={DeleteIcon} alt="Delete Icon" />
      <NavLink to={`/warehouse/edit/${SingleWarehouseInfo?._id}`}>
        <img src={EditIcon} alt="Edit Icon" />
      </NavLink>
    </>
  );
}

export default WarehouseCard;
