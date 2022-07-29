import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployees } from "../../api";
import EmployeeInfoList from "../../components/Employee/EmployeeInfoList";

const EmployeeTotal = () => {
  const { employeeId } = useParams();
  const [currentEmployee, setCurrentEmployee] = useState({});

  const getCurrentEmployee = async () => {
    const data = await getEmployees(employeeId);
    setCurrentEmployee(data);
  };

  useEffect(() => {
    getCurrentEmployee();
  }, []);

  return <EmployeeInfoList employee={currentEmployee} />;
};

export default EmployeeTotal;
