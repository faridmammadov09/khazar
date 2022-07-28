import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../../api";
import SearchPanelDayOff from "../../../components/SearchPanel/SearchPanelDayOff";
import InquiryTable from "../../../components/Table/InquiryTable/InquiryTable";

const DayOff = () => {
  const isShowDayOffSearchPanel = useSelector(
    (state) => state.app.isShowDayOffSearchPanel
  );
  const [dayOffsData, setDayOffsData] = useState([]);

  const getDayOffsData = async () => {
    const { data } = await API.get("/dayOffs");
    setDayOffsData(data);
  };

  useEffect(() => {
    getDayOffsData();
  }, []);

  return (
    <>
      {isShowDayOffSearchPanel && <SearchPanelDayOff />}

      <InquiryTable bodyData={dayOffsData} />
    </>
  );
};

export default DayOff;
