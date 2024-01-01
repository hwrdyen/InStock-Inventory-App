import "./WarehouseModal.scss";
import axios from "axios";
import { useSnackbar } from "notistack";

// Assets
import CloseIcon from "../../../assets/Icons/close-24px.svg";

function WarehouseModal({
  SingleWarehouseInfo,
  onClose,
  setUpdateWarehouseData,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteWarehouse = () => {
    axios
      .delete(
        `https://instock-inventory-be.onrender.com/warehouse/${SingleWarehouseInfo?._id}`
      )
      .then(() => {
        enqueueSnackbar("Warehouse Deleted successfully", {
          variant: "success",
        });
        console.log(`deleted warehouse ${SingleWarehouseInfo?._id}`);
        setUpdateWarehouseData(true);
      })
      .catch((error) => {
        enqueueSnackbar("Error", {
          variant: "error",
        });
        console.log(error);
      });
  };

  return (
    <div className="WarehouseModal__Container" onClick={onClose}>
      <div
        className="WarehouseModal__PopUpContainer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Delete Message Container */}
        <div className="WarehouseModal__DeleteMsgContainer">
          <img
            src={CloseIcon}
            alt="Close Icon"
            onClick={onClose}
            className="WarehouseModal__DeleteMsgContainer--closeicon"
          />
          <div className="WarehouseModal__DeleteMsgContainer--deletetitle">
            Delete {SingleWarehouseInfo?.name} Warehouse?
          </div>
          <div className="WarehouseModal__DeleteMsgContainer--deletedescription">
            Please confirm that you&#8217;d like to delete{" "}
            <b>{SingleWarehouseInfo?.name}</b> from the list of warehouses. You
            won&#8217;t be able to undo this action.
          </div>
        </div>

        {/* Button Container */}
        <div className="WarehouseModal__ButtonContainer">
          <button
            onClick={onClose}
            className="WarehouseModal__ButtonContainer--cancelbutton"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteWarehouse}
            className="WarehouseModal__ButtonContainer--deletebutton"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseModal;
