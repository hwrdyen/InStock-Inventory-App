import "./WarehouseInventoryCardList.scss";

// Components
import WarehouseInventoryCard from "../../../Card/Warehouse/WarehouseInventoryCard/WarehouseInventoryCard";

// Assets
import SortIcon from "../../../../assets/Icons/sort-24px.svg";

function WarehouseInventoryCardList({
  WarehouseInventoriesInfo,
  setUpdateWarehouseInventoriesData,
}) {
  return (
    <div className="WarehouseInventoryCardList__Container">
      <div className="WarehouseInventoryCardList__TabletTitle">
        <div className="WarehouseInventoryCardList__TabletTitle--title">
          <div className="WarehouseInventoryCardList__TabletTitle--blocktitlesection">
            <div className="WarehouseInventoryCardList__TabletTitle--blocktitle">
              INVENTORY ITEM{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseInventoryCardList__TabletTitle--sorticon"
              />
            </div>
            <div className="WarehouseInventoryCardList__TabletTitle--blocktitle">
              CATEGORY{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseInventoryCardList__TabletTitle--sorticon"
              />
            </div>
          </div>
          <div className="WarehouseInventoryCardList__TabletTitle--blocktitlesection">
            <div className="WarehouseInventoryCardList__TabletTitle--blocktitle">
              STATUS{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseInventoryCardList__TabletTitle--sorticon"
              />
            </div>
            <div className="WarehouseInventoryCardList__TabletTitle--blocktitle">
              QTY{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseInventoryCardList__TabletTitle--sorticon"
              />
            </div>
            <div className="WarehouseInventoryCardList__TabletTitle--blocktitle">
              WAREHOUSE{" "}
              <img
                src={SortIcon}
                alt="Sort Icon"
                className="WarehouseInventoryCardList__TabletTitle--sorticon"
              />
            </div>
          </div>
        </div>

        <div className="WarehouseInventoryCardList__TabletTitle--button">
          ACTIONS
        </div>
      </div>
      <div>
        {WarehouseInventoriesInfo.map((WarehouseInventoryInfo) => (
          <WarehouseInventoryCard
            key={WarehouseInventoryInfo?._id}
            WarehouseInventoryInfo={WarehouseInventoryInfo}
            setUpdateWarehouseInventoriesData={
              setUpdateWarehouseInventoriesData
            }
          />
        ))}
      </div>
    </div>
  );
}

export default WarehouseInventoryCardList;
