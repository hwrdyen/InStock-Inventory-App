import "./App.scss";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// Pages - Warehouse
import WarehouseHome from "./pages/Warehouse/WarehouseHome";
import WarehouseDetail from "./pages/Warehouse/WarehouseDetail";
import WarehouseEdit from "./pages/Warehouse/WarehouseEdit";
import WarehouseCreate from "./pages/Warehouse/WarehouseCreate";
// Pages - Inventory
import InventoryHome from "./pages/Inventory/InventoryHome";
import InventoryDetail from "./pages/Inventory/InventoryDetail";
import InventoryEdit from "./pages/Inventory/InventoryEdit";
import InventoryCreate from "./pages/Inventory/InventoryCreate";

function App() {
  return (
    <div className="App__Container">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/warehouse"} element={<WarehouseHome />} />
        <Route path={"/warehouse/create"} element={<WarehouseCreate />} />
        <Route path={"/warehouse/:warehouseID"} element={<WarehouseDetail />} />
        <Route
          path={"/warehouse/edit/:warehouseID"}
          element={<WarehouseEdit />}
        />
        <Route path={"/inventory"} element={<InventoryHome />} />
        <Route path={"/inventory/create"} element={<InventoryCreate />} />
        <Route path={"/inventory/:inventoryID"} element={<InventoryDetail />} />
        <Route
          path={"/inventory/edit/:inventoryID"}
          element={<InventoryEdit />}
        />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
