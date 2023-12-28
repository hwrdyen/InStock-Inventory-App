import { NavLink } from "react-router-dom";

// Assets
import EditIcon from "../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../assets/Icons/delete_outline-24px.svg";

function WarehouseCard({ SingleWarehouseInfo }) {
  return (
    <>
      <div>This is Warehouse Card:</div>

      <NavLink to={`/warehouse/${SingleWarehouseInfo?._id}`}>
        <div>{SingleWarehouseInfo?.name}</div>
      </NavLink>

      <img src={DeleteIcon} alt="Delete Icon" />
      <NavLink to={`/warehouse/edit/${SingleWarehouseInfo?._id}`}>
        <img src={EditIcon} alt="Edit Icon" />
      </NavLink>
    </>
  );
}

export default WarehouseCard;
