import { Typography } from "@mui/material";
import API from "../../../../api";
import Button from "../../../Button/Button";
import Modal from "../../Modal";

const DeleteContractModal = ({
  open,
  onClose,
  onFetchEmployeeContracts,
  contract,
}) => {
  const handleDeleteContract = (e) => {
    e.preventDefault();

    API.delete(`contracts/${contract.id}`).then(() => {
      onFetchEmployeeContracts();
      onClose();
    });
  };

  return (
    <Modal
      title="Müqavilənin silinməsi"
      open={open}
      onClose={onClose}
      onSubmit={handleDeleteContract}
      actionButtons={
        <>
          <Button onClick={onClose}>İmtina et</Button>
          <Button primary type="submit">
            Sil
          </Button>
        </>
      }
    >
      <Typography>
        <b>{contract.number}</b> nömrəli müqaviləni silmək istədiyinizdən
        əminsiniz?
      </Typography>
    </Modal>
  );
};

export default DeleteContractModal;
