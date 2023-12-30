import "./WarehouseCard.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import WarehouseModal from "../../Modal/Warehouse/WarehouseModal";

// Assets
import EditIcon from "../../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../../assets/Icons/delete_outline-24px.svg";
import ArrowRight from "../../../assets/Icons/chevron_right-24px.svg";

function WarehouseCard({ SingleWarehouseInfo, setUpdateWarehouseData }) {
  const [ShowModal, setShowModal] = useState(false);

  return (
    <div className="WarehouseCard__Container">
      {/* Warehouse Detail */}
      <div className="WarehouseCard__Detail">
        {/* Name & Address */}
        <div className="WarehouseCard__Detail--section">
          {/* Name */}
          <div className="WarehouseCard__Detail--sectionblock">
            <div className="WarehouseCard__Detail--blocktitle">WAREHOUSE</div>
            <NavLink
              to={`/warehouse/${SingleWarehouseInfo?._id}`}
              className="WarehouseCard__Detail--namelink"
            >
              <div className="WarehouseCard__Detail--nameblock">
                <div className="WarehouseCard__Detail--info WarehouseCard__Detail--nametitle">
                  {SingleWarehouseInfo?.name}
                </div>
                <img
                  src={ArrowRight}
                  alt="Right Arrow"
                  className="WarehouseCard__Detail--namearrow"
                />
              </div>
            </NavLink>
          </div>

          {/* Address */}
          <div className="WarehouseCard__Detail--sectionblock">
            <div className="WarehouseCard__Detail--blocktitle">ADDRESS</div>
            <div className="WarehouseCard__Detail--addressblock">
              <div className="WarehouseCard__Detail--info">
                {SingleWarehouseInfo?.address}
              </div>
              <div className="WarehouseCard__Detail--info">
                {SingleWarehouseInfo?.city}, {SingleWarehouseInfo?.country}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Name & Contact Info */}
        <div className="WarehouseCard__Detail--section">
          {/* Contact Name */}
          <div className="WarehouseCard__Detail--sectionblock">
            <div className="WarehouseCard__Detail--blocktitle">
              CONTACT NAME
            </div>
            <div className="WarehouseCard__Detail--info">
              {SingleWarehouseInfo?.contact?.name}
            </div>
          </div>

          {/* Contact Info */}
          <div className="WarehouseCard__Detail--sectionblock">
            <div className="WarehouseCard__Detail--blocktitle">
              CONTACT INFORMATION
            </div>
            <div className="WarehouseCard__Detail--contactinfoblock">
              <div className="WarehouseCard__Detail--info">
                {SingleWarehouseInfo?.contact?.phone}
              </div>
              <div className="WarehouseCard__Detail--info">
                {SingleWarehouseInfo?.contact?.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="WarehouseCard__ButtonContainer">
        <img
          src={DeleteIcon}
          alt="Delete Icon"
          onClick={() => setShowModal(true)}
          className="WarehouseCard__Button--delete"
        />
        <NavLink
          to={`/warehouse/edit/${SingleWarehouseInfo?._id}`}
          className="WarehouseCard__Button--editlink"
        >
          <img
            src={EditIcon}
            alt="Edit Icon"
            className="WarehouseCard__Button--edit"
          />
        </NavLink>
      </div>

      {ShowModal && (
        <WarehouseModal
          SingleWarehouseInfo={SingleWarehouseInfo}
          setUpdateWarehouseData={setUpdateWarehouseData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default WarehouseCard;
