import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import InventoryModal from "../../Modal/Inventory/InventoryModal";

// Assets
import EditIcon from "../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../assets/Icons/delete_outline-24px.svg";

function InventoryCard({ SingleInventoryInfo, setUpdateInventoryData }) {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <>
      <div>This is InventoryCard</div>

      <NavLink to={`/inventory/${SingleInventoryInfo?._id}`}>
        <div>{SingleInventoryInfo?.name}</div>
      </NavLink>

      <img
        src={DeleteIcon}
        alt="Delete Icon"
        onClick={() => setShowModal(true)}
      />
      <NavLink to={`/inventory/edit/${SingleInventoryInfo?._id}`}>
        <img src={EditIcon} alt="Edit Icon" />
      </NavLink>

      {ShowModal && (
        <InventoryModal
          SingleInventoryInfo={SingleInventoryInfo}
          setUpdateInventoryData={setUpdateInventoryData}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default InventoryCard;
