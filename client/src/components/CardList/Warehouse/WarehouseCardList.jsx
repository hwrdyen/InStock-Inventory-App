import "./WarehouseCardList.scss";

// Component
import WarehouseCard from "../../Card/Warehouse/WarehouseCard";

// Assets
import SortIcon from "../../../assets/Icons/sort-24px.svg";

function WarehouseCardList({ AllWarehouseInfo, setUpdateWarehouseData }) {
  return (
    <div className="WarehouseCardList__Container">
      <div className="WarehouseCardList__TabletTitle">
        <div className="WarehouseCardList__TabletTitle--title">
          <div className="WarehouseCardList__TabletTitle--blocktitlesection">
            <div className="WarehouseCardList__TabletTitle--blocktitle">
              WAREHOUSE{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseCardList__TabletTitle--sorticon"
              />
            </div>
            <div className="WarehouseCardList__TabletTitle--blocktitle">
              ADDRESS{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseCardList__TabletTitle--sorticon"
              />
            </div>
          </div>
          <div className="WarehouseCardList__TabletTitle--blocktitlesection">
            <div className="WarehouseCardList__TabletTitle--blocktitle">
              CONTACT NAME{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseCardList__TabletTitle--sorticon"
              />
            </div>
            <div className="WarehouseCardList__TabletTitle--blocktitle">
              CONTACT INFORMATION{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseCardList__TabletTitle--sorticon"
              />
            </div>
          </div>
        </div>

        <div className="WarehouseCardList__TabletTitle--button">ACTIONS</div>
      </div>
      <div>
        {AllWarehouseInfo.map((SingleWarehouseInfo) => (
          <WarehouseCard
            key={SingleWarehouseInfo._id}
            SingleWarehouseInfo={SingleWarehouseInfo}
            setUpdateWarehouseData={setUpdateWarehouseData}
          />
        ))}
      </div>
    </div>
  );
}

export default WarehouseCardList;
