import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api";
import EmployeeTable from "../../components/Table/EmployeeTable/EmployeeTable";
import CreateNewCommandModal from "../../components/Modal/Employee/Command/CreateNewCommandModal";
import EditCommandModal from "../../components/Modal/Employee/Command/EditCommandModal";
import DeleteCommandModal from "../../components/Modal/Employee/Command/DeleteCommandModal";

const EmployeeCommand = () => {
  const { employeeId } = useParams();
  const [commands, setCommands] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState({});

  const getCommands = async () => {
    const { data } = await API.get(`commands?employeeId=${employeeId}`);
    setCommands(data);
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleOpenEditModal = (command) => {
    setOpenEditModal(true);
    setSelectedCommand(command);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleOpenDeleteModal = (command) => {
    setOpenDeleteModal(true);
    setSelectedCommand(command);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  useEffect(() => {
    getCommands();
  }, []);

  return (
    <>
      <CreateNewCommandModal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        onFetchEmployeeCommands={getCommands}
      />

      <EditCommandModal
        open={openEditModal}
        onClose={handleCloseEditModal}
        onFetchEmployeeCommands={getCommands}
        command={selectedCommand}
      />

      <DeleteCommandModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        onFetchEmployeeCommands={getCommands}
        command={selectedCommand}
      />

      <EmployeeTable
        title="Əmr"
        headerData={["Tipi", "Nömrəsi", "Tarixi", "Məsul şəxs"]}
        bodyData={commands}
        onClickAdd={handleOpenCreateModal}
        onOpenEditModal={handleOpenEditModal}
        onDeleteModal={handleOpenDeleteModal}
      />
    </>
  );
};

export default EmployeeCommand;
