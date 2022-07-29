import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { fetchData } from "../../api";
import TableWrapper from "../../components/Table/TableWrapper";
import Table from "../../components/Table/Table";

const Home = () => {
  const [latestQueries, setLatestQueries] = useState([]);
  const [myQueries, setMyQueries] = useState([]);
  const [latestInfoAboutEmployees, setLatestInfoAboutEmployees] = useState([]);
  const [upcomingAnniversary, setUpcomingAnniversary] = useState([]);
  const [todaysDayOffs, setTodaysDayOffs] = useState([]);
  const [vacationInfo, setVacationInfo] = useState([]);
  const [nextBirthdays, setNextBirthdays] = useState([]);
  const [businessTrip, setBusinessTrip] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [vacationBalance, setVacationBalance] = useState([]);

  const fetchAllData = () => {
    fetchData("latestQueries?_sort=id&_order=desc&_limit=5", setLatestQueries);
    fetchData("myQueries", setMyQueries);
    fetchData("latestInfoAboutEmployees", setLatestInfoAboutEmployees);
    fetchData("upcomingAnniversary", setUpcomingAnniversary);
    fetchData("todaysDayOffs", setTodaysDayOffs);
    fetchData("vacationInfo", setVacationInfo);
    fetchData("nextBirthdays", setNextBirthdays);
    fetchData("businessTrip", setBusinessTrip);
    fetchData("announcements", setAnnouncements);
    fetchData("vacationBalances", setVacationBalance);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const tableData = [
    {
      title: "Son sorğular",
      onRefreshData: () => fetchData("latestQueries", setLatestQueries),
      headerData: ["Adı", "Tipi", "Tarixi", "Statusu"],
      bodyData: latestQueries,
      filteredKeys: ["id", "fullName", "photo", "type", "date", "status"],
    },
    {
      title: "Mənim sorğularım",
      onRefreshData: () => fetchData("myQueries", setMyQueries),
      headerData: ["Tipi", "Status", "Tarixi"],
      bodyData: myQueries,
      filteredKeys: ["id", "type", "status", "date"],
    },
    {
      title: "Əməkdaşlar haqqında son məlumat",
      onRefreshData: () =>
        fetchData("latestInfoAboutEmployees", setLatestInfoAboutEmployees),
      headerData: ["Adı", "Vəzifə", "Status"],
      bodyData: latestInfoAboutEmployees,
      filteredKeys: ["id", "fullName", "photo", "position", "status"],
    },
    {
      title: "Qarşıdan gələn ildönümü",
      onRefreshData: () =>
        fetchData("upcomingAnniversary", setUpcomingAnniversary),
      headerData: ["Adı", "İl", "Tarixi"],
      bodyData: upcomingAnniversary,
      filteredKeys: ["id", "fullName", "photo", "year", "date"],
    },
    {
      title: "Bu gün ki Day off-lar",
      onRefreshData: () => fetchData("todaysDayOffs", setTodaysDayOffs),
      headerData: ["Adı", "Tipi"],
      bodyData: todaysDayOffs,
      filteredKeys: ["id", "fullName", "photo", "type"],
    },
    {
      title: "Məzuniyyət məlumatı",
      onRefreshData: () => fetchData("vacationInfo", setVacationInfo),
      headerData: ["Adı", "Tarixi", "Əvəzedici şəxs"],
      bodyData: vacationInfo,
      filteredKeys: ["id", "fullName", "photo", "date", "substitutePerson"],
    },
    {
      title: "Növbəti ad günləri",
      onRefreshData: () => fetchData("nextBirthdays", setNextBirthdays),
      headerData: ["Adı", "Tarixi"],
      bodyData: nextBirthdays,
      filteredKeys: ["id", "fullName", "photo", "date"],
    },
    {
      title: "Ezamiyyət",
      onRefreshData: () => fetchData("businessTrip", setBusinessTrip),
      headerData: ["Adı", "Tarixi"],
      bodyData: businessTrip,
      filteredKeys: ["id", "fullName", "photo", "date"],
    },
    {
      title: "Elanlar",
      onRefreshData: () => fetchData("announcements", setAnnouncements),
      headerData: ["Adı", "Təsviri", "Yaradan şəxs", "Yaradılma tarixi"],
      bodyData: announcements,
      filteredKeys: ["id", "name", "description", "createdBy", "createdDate"],
    },
    {
      title: "Məzuniyyət balansı",
      onRefreshData: () => fetchData("vacationBalances", setVacationBalance),
      headerData: ["İş ili", "Əsas", "Əlavə", "İstifadə edilmiş", "Qalıq"],
      bodyData: vacationBalance,
      filteredKeys: [
        "id",
        "yearOfWork",
        "main",
        "addition",
        "used",
        "remainder",
      ],
    },
  ];

  return (
    <Stack spacing={2}>
      {tableData.map((table, index) => (
        <TableWrapper
          key={index}
          title={table.title}
          onRefreshData={table.onRefreshData}
        >
          <Table
            headerData={table.headerData}
            bodyData={table.bodyData}
            filteredKeys={table.filteredKeys}
          />
        </TableWrapper>
      ))}
    </Stack>
  );
};

export default Home;
