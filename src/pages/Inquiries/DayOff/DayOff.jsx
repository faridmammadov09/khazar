import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../../api";
import SearchPanelDayOff from "../../../components/SearchPanel/SearchPanelDayOff";
import DayOffTable from "../../../components/Table/DayOffTable/DayOffTable";

const DayOff = () => {
  const isShowDayOffSearchPanel = useSelector(
    (state) => state.app.isShowDayOffSearchPanel
  );
  const [dayOffs, setDayOffs] = useState([]);

  const getDayOffs = async () => {
    const { data } = await API.get("/dayOffs");
    setDayOffs(data);
  };

  useEffect(() => {
    getDayOffs();
  }, []);

  return (
    <>
      {isShowDayOffSearchPanel && <SearchPanelDayOff />}

      <DayOffTable
        headerData={["Ad Soyad Ata", "Tarix", "Status"]}
        bodyData={dayOffs}
      />
    </>
  );
};

export default DayOff;
