import { useEffect, useState } from "react";
import API from "../../../api";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const Purchasing = () => {
  const [purchasingData, setPurchasingData] = useState([]);

  const getPurchasingData = async () => {
    const { data } = await API.get("/purchases");
    setPurchasingData(data);
  };

  useEffect(() => {
    getPurchasingData();
  }, []);

  return <InquiryTable bodyData={purchasingData} />;
};

export default Purchasing;
