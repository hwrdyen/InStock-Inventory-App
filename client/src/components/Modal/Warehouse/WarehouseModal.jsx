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
      .delete(`http://localhost:8000/warehouse/${SingleWarehouseInfo?._id}`)
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
    <>
      <div onClick={onClose}>
        <img src={CloseIcon} alt="Close Icon" onClick={onClose} />
        <div>Delete {SingleWarehouseInfo?.name} warehouse?</div>
        <div>
          Please confirm that you&sbquo;d like to delete the{" "}
          {SingleWarehouseInfo?.name} from the list of warehouses. You
          won&sbquo;t be able to undo this action.
        </div>

        <button onClick={onClose}>Cancel</button>
        <button onClick={handleDeleteWarehouse}>Delete</button>
      </div>
    </>
  );
}

export default WarehouseModal;
