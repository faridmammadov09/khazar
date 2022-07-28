import { useEffect, useState } from "react";
import API from "../../../api";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const Guest = () => {
  const [guestData, setGuestData] = useState([]);

  const getGuestData = async () => {
    const { data } = await API.get("/guests");
    setGuestData(data);
  };

  useEffect(() => {
    getGuestData();
  }, []);

  return <InquiryTable bodyData={guestData} />;
};

export default Guest;
