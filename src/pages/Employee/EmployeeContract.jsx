import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api";
import EmployeeTable from "../../components/Table/EmployeeTable/EmployeeTable";
import CreateNewContractModal from "../../components/Modal/Employee/Contract/CreateNewContractModal";
import EditContractModal from "../../components/Modal/Employee/Contract/EditContractModal";
import DeleteContractModal from "../../components/Modal/Employee/Contract/DeleteContractModal";

const EmployeeContract = () => {
  const { employeeId } = useParams();
  const [contracts, setContracts] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState({});

  const fetchEmployeeContracts = async () => {
    const { data } = await API.get(`contracts?employeeId=${employeeId}`);
    setContracts(data);
  };

  useEffect(() => {
    fetchEmployeeContracts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleOpenEditModal = (contract) => {
    setOpenEditModal(true);
    setSelectedContract(contract);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleOpenDeleteModal = (contract) => {
    setOpenDeleteModal(true);
    setSelectedContract(contract);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  return (
    <>
      <CreateNewContractModal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        onFetchEmployeeContracts={fetchEmployeeContracts}
      />

      <EditContractModal
        open={openEditModal}
        onClose={handleCloseEditModal}
        onFetchEmployeeContracts={fetchEmployeeContracts}
        contract={selectedContract}
      />

      <DeleteContractModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        onFetchEmployeeContracts={fetchEmployeeContracts}
        contract={selectedContract}
      />

      <EmployeeTable
        title="Müqavilə"
        headerData={[
          "Bağlanma tarixi",
          "Bitmə tarixi",
          "Növü",
          "Nömrəsi",
          "Əmək kitabçasının №",
          "Müddəti",
        ]}
        bodyData={contracts}
        onClickAdd={handleOpenCreateModal}
        onOpenEditModal={handleOpenEditModal}
        onDeleteModal={handleOpenDeleteModal}
      />
    </>
  );
};

export default EmployeeContract;
