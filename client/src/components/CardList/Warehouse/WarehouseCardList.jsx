import "./WarehouseCardList.scss";

// Component
import WarehouseCard from "../../Card/Warehouse/WarehouseCard";

// Assets
import SortIcon from "../../../assets/Icons/sort-24px.svg";

function WarehouseCardList({ AllWarehouseInfo, setUpdateWarehouseData }) {
  return (
    <div className="CardList__Container">
      <div className="CardList__TabletTitle">
        <div className="CardList__TabletTitle--title">
          <div className="CardList__TabletTitle--blocktitlesection">
            <div className="CardList__TabletTitle--blocktitle">
              WAREHOUSE{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="CardList__TabletTitle--sorticon"
              />
            </div>
            <div className="CardList__TabletTitle--blocktitle">
              ADDRESS{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="CardList__TabletTitle--sorticon"
              />
            </div>
          </div>
          <div className="CardList__TabletTitle--blocktitlesection">
            <div className="CardList__TabletTitle--blocktitle">
              CONTACT NAME{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="CardList__TabletTitle--sorticon"
              />
            </div>
            <div className="CardList__TabletTitle--blocktitle">
              CONTACT INFORMATION{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="CardList__TabletTitle--sorticon"
              />
            </div>
          </div>
        </div>

        <div className="CardList__TabletTitle--button">ACTIONS</div>
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
