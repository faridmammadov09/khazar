import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API, { getEmployees } from "../../api";
import EmployeesTable from "../Table/EmployeesTable/EmployeesTable";
import SearchPanelEmployee from "../SearchPanel/SearchPanelEmployee";
import ArchiveEmployeeModal from "../Modal/Employee/ArchiveEmployeeModal";
import Alert from "../Alert/Alert";

const EmployeesTableContainer = () => {
  const [employees, setEmployees] = useState([]);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);
  const [isShowArchiveAlert, setIsShowArchiveAlert] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const { isShowEmployeeSearchPanel } = useSelector((state) => state.employee);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleOpenArchiveModal = (employee) => {
    setOpenArchiveModal(true);
    setSelectedEmployee(employee);
  };

  const handleCloseArchiveModal = () => {
    setOpenArchiveModal(false);
  };

  const handleOpenArchiveAlert = () => {
    handleCloseArchiveModal();
    setIsShowArchiveAlert(true);

    API.patch(`/employees/${selectedEmployee.id}`, {
      isArchived: !selectedEmployee.isArchived,
    }).then(() => {
      fetchEmployees();
    });
  };

  const handleCloseArchiveAlert = () => {
    setIsShowArchiveAlert(false);
  };

  const handleSearchEmployee = async ({ fullName }) => {
    const data = await getEmployees(`?fullName_like=${fullName}`);
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
      <Alert
        open={isShowArchiveAlert}
        onClose={handleCloseArchiveAlert}
        severity="success"
        text={`"${selectedEmployee.fullName}" haqqında məlumatlar ${
          selectedEmployee.isArchived ? "arxivdən çıxarıldı" : "arxivləndi"
        }`}
      />

      <ArchiveEmployeeModal
        employee={selectedEmployee}
        open={openArchiveModal}
        onClose={handleCloseArchiveModal}
        onArchive={handleOpenArchiveAlert}
      />

      {isShowEmployeeSearchPanel && (
        <SearchPanelEmployee onSearchEmployee={handleSearchEmployee} />
      )}

      <EmployeesTable
        headerData={["A.S.A.", "Vəzifə", "Şöbə", "E-ünvan", "Korporativ nömrə"]}
        bodyData={employees}
        handleOpenArchiveModal={handleOpenArchiveModal}
      />
    </>
  );
};

export default EmployeesTableContainer;
