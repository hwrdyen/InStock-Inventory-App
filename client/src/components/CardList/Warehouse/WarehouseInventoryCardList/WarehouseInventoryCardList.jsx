import WarehouseInventoryCard from "../../../Card/Warehouse/WarehouseInventoryCard/WarehouseInventoryCard";

import { useEffect, useState } from "react";
import axios from "axios";
function WarehouseInventoryCardList({
  WarehouseInventoriesInfo,
  setUpdateWarehouseInventoriesData,
}) {
  return (
    <>
      <div> This is InventoryList inside WarehouseDetail: </div>
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
    </>
  );
}

export default WarehouseInventoryCardList;
