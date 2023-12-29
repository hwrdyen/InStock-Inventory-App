import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import InventoryModal from "../../../Modal/Inventory/InventoryModal";

// Assets
import EditIcon from "../../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../../assets/Icons/delete_outline-24px.svg";

function WarehouseInventoryCard({
  WarehouseInventoryInfo,
  setUpdateWarehouseInventoriesData,
}) {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <>
      <div>This is WarehouseInventoryCard</div>
      <NavLink to={`/inventory/${WarehouseInventoryInfo?._id}`}>
        <div>{WarehouseInventoryInfo?.name}</div>
      </NavLink>

      <img
        src={DeleteIcon}
        alt="Delete Icon"
        onClick={() => setShowModal(true)}
      />
      <NavLink to={`/inventory/edit/${WarehouseInventoryInfo?._id}`}>
        <img src={EditIcon} alt="Edit Icon" />
      </NavLink>

      {ShowModal && (
        <InventoryModal
          SingleInventoryInfo={WarehouseInventoryInfo}
          setUpdateInventoryData={setUpdateWarehouseInventoriesData}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default WarehouseInventoryCard;
