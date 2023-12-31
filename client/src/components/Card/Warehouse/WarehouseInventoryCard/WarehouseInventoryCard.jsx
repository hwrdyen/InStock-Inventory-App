import "./WarehouseInventoryCard.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import InventoryModal from "../../../Modal/Inventory/InventoryModal";

// Assets
import EditIcon from "../../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../../assets/Icons/delete_outline-24px.svg";
import ArrowRight from "../../../../assets/Icons/chevron_right-24px.svg";

function WarehouseInventoryCard({
  WarehouseInventoryInfo,
  setUpdateWarehouseInventoriesData,
}) {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <div className="WarehouseInventoryCard__Container">
      {/* Inventory Detail */}
      <div className="WarehouseInventoryCard__Detail">
        {/* Inventory Item & Category */}
        <div className="WarehouseInventoryCard__Detail--section">
          {/* Inventory Item */}
          <div className="WarehouseInventoryCard__Detail--sectionblock">
            <div className="WarehouseInventoryCard__Detail--blocktitle">
              INVENTORY ITEM
            </div>
            <NavLink
              to={`/inventory/${WarehouseInventoryInfo?._id}`}
              className="WarehouseInventoryCard__Detail--namelink"
            >
              <div className="WarehouseInventoryCard__Detail--nameblock">
                <div className="WarehouseInventoryCard__Detail--info WarehouseInventoryCard__Detail--nametitle">
                  {WarehouseInventoryInfo?.name}
                </div>
                <img
                  src={ArrowRight}
                  alt="Right Arrow"
                  className="WarehouseInventoryCard__Detail--namearrow"
                />
              </div>
            </NavLink>
          </div>

          {/* Category */}
          <div className="WarehouseInventoryCard__Detail--sectionblock">
            <div className="WarehouseInventoryCard__Detail--blocktitle">
              CATEGORY
            </div>
            <div className="WarehouseInventoryCard__Detail--info">
              {WarehouseInventoryInfo?.category}
            </div>
          </div>
        </div>

        {/* Status & QTY & Warehouse */}
        <div className="WarehouseInventoryCard__Detail--section">
          {/* Status */}
          <div className="WarehouseInventoryCard__Detail--sectionblock">
            <div className="WarehouseInventoryCard__Detail--blocktitle">
              STATUS
            </div>
            <div className="WarehouseInventoryCard__Detail--info">
              {WarehouseInventoryInfo?.status}
            </div>
          </div>

          {/* QTY */}
          <div className="WarehouseInventoryCard__Detail--sectionblock">
            <div className="WarehouseInventoryCard__Detail--blocktitle">
              QTY
            </div>
            <div className="WarehouseInventoryCard__Detail--info">
              {WarehouseInventoryInfo?.quantity}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="WarehouseInventoryCard__ButtonContainer">
        <img
          src={DeleteIcon}
          alt="Delete Icon"
          onClick={() => setShowModal(true)}
        />
        <NavLink to={`/inventory/edit/${WarehouseInventoryInfo?._id}`}>
          <img src={EditIcon} alt="Edit Icon" />
        </NavLink>
      </div>

      {ShowModal && (
        <InventoryModal
          SingleInventoryInfo={WarehouseInventoryInfo}
          setUpdateInventoryData={setUpdateWarehouseInventoriesData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default WarehouseInventoryCard;
