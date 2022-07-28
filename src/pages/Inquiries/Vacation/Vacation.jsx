import { useEffect, useState } from "react";
import API from "../../../api";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const Vacation = () => {
  const [vacationInfoData, setVacationInfoData] = useState([]);

  const getVacationInfoData = async () => {
    const { data } = await API.get("/vacationInfo");
    setVacationInfoData(data);
  };

  useEffect(() => {
    getVacationInfoData();
  }, []);

  return <InquiryTable bodyData={vacationInfoData} />;
};

export default Vacation;
