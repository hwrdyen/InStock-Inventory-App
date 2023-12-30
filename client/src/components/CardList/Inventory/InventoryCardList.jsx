import "./InventoryCardList.scss";

// Components
import InventoryCard from "../../Card/Inventory/InventoryCard";

// Assets
import SortIcon from "../../../assets/Icons/sort-24px.svg";

function InventoryCardList({ AllInventoryInfo, setUpdateInventoryData }) {
  return (
    <div className="InventoryCardList__Container">
      <div className="InventoryCardList__TabletTitle">
        <div className="InventoryCardList__TabletTitle--title">
          <div className="InventoryCardList__TabletTitle--blocktitlesection">
            <div className="InventoryCardList__TabletTitle--blocktitle">
              INVENTORY ITEM{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="InventoryCardList__TabletTitle--sorticon"
              />
            </div>
            <div className="InventoryCardList__TabletTitle--blocktitle">
              CATEGORY{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="InventoryCardList__TabletTitle--sorticon"
              />
            </div>
          </div>
          <div className="InventoryCardList__TabletTitle--blocktitlesection">
            <div className="InventoryCardList__TabletTitle--blocktitle">
              STATUS{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="InventoryCardList__TabletTitle--sorticon"
              />
            </div>
            <div className="InventoryCardList__TabletTitle--blocktitle">
              QTY{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="InventoryCardList__TabletTitle--sorticon"
              />
            </div>
            <div className="InventoryCardList__TabletTitle--blocktitle">
              WAREHOUSE{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="InventoryCardList__TabletTitle--sorticon"
              />
            </div>
          </div>
        </div>

        <div className="InventoryCardList__TabletTitle--button">ACTIONS</div>
      </div>
      <div>
        {AllInventoryInfo.map((SingleInventoryInfo) => (
          <InventoryCard
            key={SingleInventoryInfo?._id}
            SingleInventoryInfo={SingleInventoryInfo}
            setUpdateInventoryData={setUpdateInventoryData}
          />
        ))}
      </div>
    </div>
  );
}

export default InventoryCardList;
