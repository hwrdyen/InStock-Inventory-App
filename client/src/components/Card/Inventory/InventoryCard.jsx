import "./InventoryCard.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import InventoryModal from "../../Modal/Inventory/InventoryModal";

// Assets
import EditIcon from "../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../assets/Icons/delete_outline-24px.svg";
import ArrowRight from "../../../assets/Icons/chevron_right-24px.svg";

function InventoryCard({ SingleInventoryInfo, setUpdateInventoryData }) {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <div className="InventoryCard__Container">
      {/* Inventory Detail */}
      <div className="InventoryCard__Detail">
        {/* Inventory Item & Category */}
        <div className="InventoryCard__Detail--section">
          {/* Inventory Item */}
          <div className="InventoryCard__Detail--sectionblock">
            <div className="InventoryCard__Detail--blocktitle">
              INVENTORY ITEM
            </div>
            <NavLink
              to={`/inventory/${SingleInventoryInfo?._id}`}
              className="InventoryCard__Detail--namelink"
            >
              <div className="InventoryCard__Detail--nameblock">
                <div className="InventoryCard__Detail--info InventoryCard__Detail--nametitle">
                  {SingleInventoryInfo?.name}
                </div>
                <img
                  src={ArrowRight}
                  alt="Right Arrow"
                  className="InventoryCard__Detail--namearrow"
                />
              </div>
            </NavLink>
          </div>

          {/* Category */}
          <div className="InventoryCard__Detail--sectionblock">
            <div className="InventoryCard__Detail--blocktitle">CATEGORY</div>
            <div className="InventoryCard__Detail--info">
              {SingleInventoryInfo?.category}
            </div>
          </div>
        </div>

        {/* Status & QTY & Warehouse */}
        <div className="InventoryCard__Detail--section">
          {/* Status */}
          <div className="InventoryCard__Detail--sectionblock">
            <div className="InventoryCard__Detail--blocktitle">STATUS</div>
            {SingleInventoryInfo?.status === "Out of Stock" ? (
              <div className="InventoryCard__Detail--info InventoryCard__Detail--outofstock">
                {SingleInventoryInfo?.status}
              </div>
            ) : (
              <div className="InventoryCard__Detail--info InventoryCard__Detail--instock">
                {SingleInventoryInfo?.status}
              </div>
            )}
          </div>

          {/* QTY */}
          <div className="InventoryCard__Detail--sectionblock">
            <div className="InventoryCard__Detail--blocktitle">QTY</div>
            <div className="InventoryCard__Detail--info">
              {SingleInventoryInfo?.quantity}
            </div>
          </div>

          {/* Warehouse */}
          <div className="InventoryCard__Detail--sectionblock">
            <div className="InventoryCard__Detail--blocktitle">WAREHOUSE</div>
            <div className="InventoryCard__Detail--info">
              {SingleInventoryInfo?.warehouseName}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="InventoryCard__ButtonContainer">
        <img
          src={DeleteIcon}
          alt="Delete Icon"
          onClick={() => setShowModal(true)}
        />
        <NavLink to={`/inventory/edit/${SingleInventoryInfo?._id}`}>
          <img src={EditIcon} alt="Edit Icon" />
        </NavLink>
      </div>

      {ShowModal && (
        <InventoryModal
          SingleInventoryInfo={SingleInventoryInfo}
          setUpdateInventoryData={setUpdateInventoryData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default InventoryCard;
