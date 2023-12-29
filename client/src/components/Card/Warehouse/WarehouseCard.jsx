import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import WarehouseModal from "../../Modal/Warehouse/WarehouseModal";

// Assets
import EditIcon from "../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../assets/Icons/delete_outline-24px.svg";

function WarehouseCard({ SingleWarehouseInfo, setUpdateWarehouseData }) {
  const [ShowModal, setShowModal] = useState(false);

  return (
    <>
      <div>This is Warehouse Card:</div>

      <NavLink to={`/warehouse/${SingleWarehouseInfo?._id}`}>
        <div>{SingleWarehouseInfo?.name}</div>
      </NavLink>

      <img
        src={DeleteIcon}
        alt="Delete Icon"
        onClick={() => setShowModal(true)}
      />
      <NavLink to={`/warehouse/edit/${SingleWarehouseInfo?._id}`}>
        <img src={EditIcon} alt="Edit Icon" />
      </NavLink>

      {ShowModal && (
        <WarehouseModal
          SingleWarehouseInfo={SingleWarehouseInfo}
          setUpdateWarehouseData={setUpdateWarehouseData}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default WarehouseCard;
