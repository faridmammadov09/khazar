import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../api";
import EmployeesTable from "../Table/EmployeesTable/EmployeesTable";
import SearchPanelEmployee from "../SearchPanel/SearchPanelEmployee";
import ArchiveEmployeeModal from "../Modal/Employee/ArchiveEmployeeModal";
import Alert from "../Alert/Alert";

const EmployeesTableContainer = () => {
  const [employees, setEmployees] = useState([]);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);
  const [isShowArchiveAlert, setIsShowArchiveAlert] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const isShowEmployeeSearchPanel = useSelector(
    (state) => state.employee.isShowEmployeeSearchPanel
  );

  const fetchEmployees = async () => {
    const { data } = await API.get("employees");
    setEmployees(data);
    setFiltered(data);
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

  const handleSearchEmployees = ({ fullName }) => {
    let filteredEmployees = employees;

    if (fullName) {
      filteredEmployees = employees.filter((item) =>
        item.fullName.toLowerCase().includes(fullName.toLowerCase())
      );

      setFiltered(filteredEmployees);
    }
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
        name={selectedEmployee.fullName}
        open={openArchiveModal}
        onClose={handleCloseArchiveModal}
        onArchive={handleOpenArchiveAlert}
      />

      {isShowEmployeeSearchPanel && (
        <SearchPanelEmployee onSearchEmployees={handleSearchEmployees} />
      )}

      <EmployeesTable
        headerData={["A.S.A.", "Vəzifə", "Şöbə", "E-ünvan", "Korporativ nömrə"]}
        bodyData={filtered}
        handleOpenArchiveModal={handleOpenArchiveModal}
      />
    </>
  );
};

export default EmployeesTableContainer;
