import { useEffect, useState } from "react";
import API from "../../../api";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const BusinessTrip = () => {
  const [businessTripData, setBusinessTripData] = useState([]);

  const getBusinessTripData = async () => {
    const { data } = await API.get("/businessTrip");
    setBusinessTripData(data);
  };

  useEffect(() => {
    getBusinessTripData();
  }, []);

  return <InquiryTable bodyData={businessTripData} />;
};

export default BusinessTrip;
