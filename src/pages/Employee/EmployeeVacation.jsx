import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVacations } from "../../api";
import EmployeeTable from "../../components/Table/EmployeeTable/EmployeeTable";
import CreateNewVacationModal from "../../components/Modal/Employee/Vacation/CreateNewVacationModal";
import EditVacationModal from "../../components/Modal/Employee/Vacation/EditVacationModal";

const EmployeeVacation = () => {
  const { employeeId } = useParams();
  const [vacations, setVacations] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedVacation, setSelectedVacation] = useState({});

  const getVacationsData = async () => {
    const data = await getVacations(`?employeeId=${employeeId}`);
    setVacations(data);
  };

  useEffect(() => {
    getVacationsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleOpenEditModal = (vacation) => {
    setOpenEditModal(true);
    setSelectedVacation(vacation);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  return (
    <>
      <CreateNewVacationModal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        getVacations={getVacations}
      />

      <EditVacationModal
        open={openEditModal}
        onClose={handleCloseEditModal}
        onGetVacations={getVacations}
        vacation={selectedVacation}
      />

      <EmployeeTable
        dropdownHidden
        title="Əmək məzuniyyətləri"
        headerData={["İş ili", "Əsas", "Əlavə", "İstifadə edilmiş", "Qalıq"]}
        bodyData={vacations}
        onClickAdd={handleOpenCreateModal}
        onOpenEditModal={handleOpenEditModal}
      />
    </>
  );
};

export default EmployeeVacation;
