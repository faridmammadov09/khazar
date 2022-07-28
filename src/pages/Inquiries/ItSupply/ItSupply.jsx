import { useEffect, useState } from "react";
import API from "../../../api";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const ItSupply = () => {
  const [itSupplyData, setItSupplyData] = useState([]);

  const getItSupplyData = async () => {
    const { data } = await API.get("/itSupplies");
    setItSupplyData(data);
  };

  useEffect(() => {
    getItSupplyData();
  }, []);

  return <InquiryTable bodyData={itSupplyData} />;
};

export default ItSupply;
