import WarehouseInventoryCard from "../../../Card/Warehouse/WarehouseInventoryCard/WarehouseInventoryCard";

import { useEffect, useState } from "react";
import axios from "axios";
function WarehouseInventoryCardList({ WarehouseInventoriesInfo }) {
  return (
    <>
      <h1> This is InventoryList inside WarehouseDetail: </h1>
      <div>
        {WarehouseInventoriesInfo.map((WarehouseInventoryInfo) => (
          <WarehouseInventoryCard
            key={WarehouseInventoryInfo?._id}
            WarehouseInventoryInfo={WarehouseInventoryInfo}
          />
        ))}
      </div>
    </>
  );
}

export default WarehouseInventoryCardList;
