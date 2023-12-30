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
      .delete(`http://localhost:8000/inventory/${SingleInventoryInfo?._id}`)
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
    <>
      <div onClick={onClose}>
        <img src={CloseIcon} alt="Close Icon" onClick={onClose} />
        <div>Delete {SingleInventoryInfo?.name} inventory item?</div>
        <div>
          Please confirm that you&#8217;d like to delete{" "}
          {SingleInventoryInfo?.name} from the inventory list. You won&#8217;t
          be able to undo this action.
        </div>

        <button onClick={onClose}>Cancel</button>
        <button onClick={handleDeleteInventory}>Delete</button>
      </div>
    </>
  );
}

export default InventoryModal;
