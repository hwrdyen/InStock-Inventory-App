import "./InventoryModal.scss";
import axios from "axios";
import { useSnackbar } from "notistack";

// Assets
import CloseIcon from "../../../assets/Icons/close-24px.svg";

function InventoryModal({
  SingleInventoryInfo,
  onClose,
  setUpdateInventoryData,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteInventory = () => {
    axios
      .delete(
        `https://instock-inventory-be.onrender.com/inventory/${SingleInventoryInfo?._id}`
      )
      .then(() => {
        enqueueSnackbar("Inventory Deleted successfully", {
          variant: "success",
        });
        console.log(`deleted inventory ${SingleInventoryInfo?._id}`);
        setUpdateInventoryData(true);
      })
      .catch((error) => {
        enqueueSnackbar("Error", {
          variant: "error",
        });
        console.log(error);
      });
  };

  return (
    <div className="InventoryModal__Container" onClick={onClose}>
      <div
        className="InventoryModal__PopUpContainer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Delete Message Container */}
        <div className="InventoryModal__DeleteMsgContainer">
          <img
            src={CloseIcon}
            alt="Close Icon"
            onClick={onClose}
            className="InventoryModal__DeleteMsgContainer--closeicon"
          />
          <div className="InventoryModal__DeleteMsgContainer--deletetitle">
            Delete {SingleInventoryInfo?.name} inventory item?
          </div>
          <div className="InventoryModal__DeleteMsgContainer--deletedescription">
            Please confirm that you&#8217;d like to delete{" "}
            <b>{SingleInventoryInfo?.name}</b> from the inventory list. You
            won&#8217;t be able to undo this action.
          </div>
        </div>

        {/* Button Container */}
        <div className="InventoryModal__ButtonContainer">
          <button
            onClick={onClose}
            className="InventoryModal__ButtonContainer--cancelbutton"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteInventory}
            className="InventoryModal__ButtonContainer--deletebutton"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default InventoryModal;
