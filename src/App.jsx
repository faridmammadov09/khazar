import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./modules/layout/Layout";
import Announcement from "./pages/Announcement/Announcement";
import AnnouncementEdit from "./pages/Announcement/AnnouncementEdit";
import Loading from "./components/Loading/Loading";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./pages/NotFound/NotFound";
import DayOff from "./pages/Inquiries/DayOff/DayOff";
import BusinessTrip from "./pages/Inquiries/BusinessTrip/BusinessTrip";
import Vacation from "./pages/Inquiries/Vacation/Vacation";
import Guest from "./pages/Inquiries/Guest/Guest";
import ItSupply from "./pages/Inquiries/ItSupply/ItSupply";
import Purchasing from "./pages/Inquiries/Purchasing/Purchasing";
import DayOffNew from "./pages/Inquiries/DayOff/DayOffNew";
import DayOffDescription from "./pages/Inquiries/DayOff/DayOffDescription";
import DayOffDescriptionDepartment from "./pages/Inquiries/DayOff/DayOffDescriptionDepartment";
import DayOffDescriptionCreate from "./pages/Inquiries/DayOff/DayOffDescriptionCreate";
import DayOffDepartmentEdit from "./pages/Inquiries/DayOff/DayOffDepartmentEdit";
import DayOffDescriptionHr from "./pages/Inquiries/DayOff/DayOffDescriptionHr";
import DayOffHrEdit from "./pages/Inquiries/DayOff/DayOffHrEdit";
import BusinessTripNew from "./pages/Inquiries/BusinessTrip/BusinessTripNew";
import BusinessTripDescription from "./pages/Inquiries/BusinessTrip/BusinessTripDescription";
import BusinessTripDescriptionCreate from "./pages/Inquiries/BusinessTrip/BusinessTripDescriptionCreate";
import BusinessTripDescriptionDepartment from "./pages/Inquiries/BusinessTrip/BusinessTripDescriptionDepartment";
import BusinessTripDescriptionHr from "./pages/Inquiries/BusinessTrip/BusinessTripDescriptionHr";
import BusinessTripDepartmentEdit from "./pages/Inquiries/BusinessTrip/BusinessTripDepartmentEdit";
import BusinessTripHrEdit from "./pages/Inquiries/BusinessTrip/BusinessTripHrEdit";
import VacationNew from "./pages/Inquiries/Vacation/VacationNew";
import GuestNew from "./pages/Inquiries/Guest/GuestNew";
import ItSupplyNew from "./pages/Inquiries/ItSupply/ItSupplyNew";
import PurchasingNew from "./pages/Inquiries/Purchasing/PurchasingNew";
import VacationDescription from "./pages/Inquiries/Vacation/VacationDescription";
import VacationDescriptionCreate from "./pages/Inquiries/Vacation/VacationDescriptionCreate";
import VacationDescriptionDepartment from "./pages/Inquiries/Vacation/VacationDescriptionDepartment";
import VacationDepartmentEdit from "./pages/Inquiries/Vacation/VacationDepartmentEdit";
import VacationDescriptionHr from "./pages/Inquiries/Vacation/VacationDescriptionHr";
import VacationHrEdit from "./pages/Inquiries/Vacation/VacationHrEdit";
import ItSupplyDescriptionCreate from "./pages/Inquiries/ItSupply/ItSupplyDescriptionCreate";
import ItSupplyDescription from "./pages/Inquiries/ItSupply/ItSupplyDescription";
import ItSupplyDescriptionDepartment from "./pages/Inquiries/ItSupply/ItSupplyDescriptionDepartment";
import ItSupplyDepartmentEdit from "./pages/Inquiries/ItSupply/ItSupplyDepartmentEdit";
import ItSupplyDescriptionIt from "./pages/Inquiries/ItSupply/ItSupplyDescriptionIt";
import ItSupplyItEdit from "./pages/Inquiries/ItSupply/ItSupplyItEdit";
import PurchasingDescription from "./pages/Inquiries/Purchasing/PurchasingDescription";
import PurchasingDescriptionCreate from "./pages/Inquiries/Purchasing/PurchasingDescriptionCreate";
import PurchasingDescriptionDepartment from "./pages/Inquiries/Purchasing/PurchasingDescriptionDepartment";
import PurchasingDepartmentEdit from "./pages/Inquiries/Purchasing/PurchasingDepartmentEdit";
import PurchasingDescriptionPurchase from "./pages/Inquiries/Purchasing/PurchasingDescriptionPurchase";
import PurchasingPurchaseEdit from "./pages/Inquiries/Purchasing/PurchasingPurchaseEdit";
import GuestDescription from "./pages/Inquiries/Guest/GuestDescription";
import GuestDescriptionCreate from "./pages/Inquiries/Guest/GuestDescriptionCreate";
import GuestDescriptionDepartment from "./pages/Inquiries/Guest/GuestDescriptionDepartment";
import GuestDepartmentEdit from "./pages/Inquiries/Guest/GuestDepartmentEdit";
import GuestDescriptionChief from "./pages/Inquiries/Guest/GuestDescriptionChief";
import GuestChiefEdit from "./pages/Inquiries/Guest/GuestChiefEdit";
import GuestDescriptionEmployee from "./pages/Inquiries/Guest/GuestDescriptionEmployee";
import GuestEmployeeEdit from "./pages/Inquiries/Guest/GuestEmployeeEdit";

const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));
const Employees = lazy(() => import("./pages/Employees/Employees"));
const EmployeesTableContainer = lazy(() =>
  import("./components/Employee/EmployeesTableContainer")
);
const NewEmployee = lazy(() => import("./pages/Employees/NewEmployee"));
const Employee = lazy(() => import("./pages/Employee/Employee"));
const EmployeeTotal = lazy(() => import("./pages/Employee/EmployeeTotal"));
const EmployeeContract = lazy(() =>
  import("./pages/Employee/EmployeeContract")
);
const EmployeeCommand = lazy(() => import("./pages/Employee/EmployeeCommand"));
const EmployeeSalary = lazy(() => import("./pages/Employee/EmployeeSalary"));
const EmployeeVacation = lazy(() =>
  import("./pages/Employee/EmployeeVacation")
);
const EmployeeDocuments = lazy(() =>
  import("./pages/Employee/EmployeeDocuments")
);
const Announcements = lazy(() => import("./pages/Announcement/Announcements"));
const AnnouncementNew = lazy(() =>
  import("./pages/Announcement/AnnouncementNew")
);
const Users = lazy(() => import("./pages/Settings/Users/Users"));
const UserRoles = lazy(() => import("./pages/Settings/UserRoles/UserRoles"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const AccountSettings = lazy(() =>
  import("./pages/Profile/AccountSettings/AccountSettings")
);
const SecurityAndLogin = lazy(() =>
  import("./pages/Profile/SecurityAndLogin/SecurityAndLogin")
);

const theme = createTheme({
  palette: {
    secondary: {
      main: "#9B5AE1",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />

        <Route element={<RequireAuth />}>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            ></Route>

            <Route
              path="employees"
              element={
                <Suspense fallback={<Loading />}>
                  <Employees />
                </Suspense>
              }
            >
              <Route index element={<EmployeesTableContainer />}></Route>
              <Route path="new" element={<NewEmployee />}></Route>
              <Route path=":employeeId" element={<Employee />}>
                <Route path="total" element={<EmployeeTotal />}></Route>
                <Route path="contract" element={<EmployeeContract />}></Route>
                <Route path="command" element={<EmployeeCommand />}></Route>
                <Route path="salary" element={<EmployeeSalary />}></Route>
                <Route path="vacation" element={<EmployeeVacation />}></Route>
                <Route path="documents" element={<EmployeeDocuments />}></Route>
              </Route>
            </Route>

            <Route path="inquiries/day-off" element={<DayOff />}></Route>
            <Route path="inquiries/day-off/new" element={<DayOffNew />}></Route>
            <Route path="inquiries/day-off/:id" element={<DayOffDescription />}>
              <Route index element={<DayOffDescriptionCreate />}></Route>
              <Route
                path="department-sending"
                element={<DayOffDescriptionDepartment />}
              ></Route>
              <Route
                path="department-sending/edit"
                element={<DayOffDepartmentEdit />}
              ></Route>
              <Route
                path="hr-sending"
                element={<DayOffDescriptionHr />}
              ></Route>
              <Route path="hr-sending/edit" element={<DayOffHrEdit />}></Route>
            </Route>

            <Route
              path="inquiries/business-trip"
              element={<BusinessTrip />}
            ></Route>
            <Route
              path="inquiries/business-trip/new"
              element={<BusinessTripNew />}
            ></Route>
            <Route
              path="inquiries/business-trip/:id"
              element={<BusinessTripDescription />}
            >
              <Route index element={<BusinessTripDescriptionCreate />}></Route>
              <Route
                path="department-sending"
                element={<BusinessTripDescriptionDepartment />}
              ></Route>
              <Route
                path="department-sending/edit"
                element={<BusinessTripDepartmentEdit />}
              ></Route>
              <Route
                path="hr-sending"
                element={<BusinessTripDescriptionHr />}
              ></Route>
              <Route
                path="hr-sending/edit"
                element={<BusinessTripHrEdit />}
              ></Route>
            </Route>

            <Route path="inquiries/vacation" element={<Vacation />}></Route>
            <Route
              path="inquiries/vacation/new"
              element={<VacationNew />}
            ></Route>
            <Route
              path="inquiries/vacation/:id"
              element={<VacationDescription />}
            >
              <Route index element={<VacationDescriptionCreate />}></Route>
              <Route
                path="department-sending"
                element={<VacationDescriptionDepartment />}
              ></Route>
              <Route
                path="department-sending/edit"
                element={<VacationDepartmentEdit />}
              ></Route>
              <Route
                path="hr-sending"
                element={<VacationDescriptionHr />}
              ></Route>
              <Route
                path="hr-sending/edit"
                element={<VacationHrEdit />}
              ></Route>
            </Route>

            <Route path="inquiries/guest" element={<Guest />}></Route>
            <Route path="inquiries/guest/new" element={<GuestNew />}></Route>
            <Route path="inquiries/guest/:id" element={<GuestDescription />}>
              <Route index element={<GuestDescriptionCreate />}></Route>
              <Route
                path="department-sending"
                element={<GuestDescriptionDepartment />}
              ></Route>
              <Route
                path="department-sending/edit"
                element={<GuestDepartmentEdit />}
              ></Route>
              <Route
                path="nbm-chief-sending"
                element={<GuestDescriptionChief />}
              ></Route>
              <Route
                path="nbm-chief-sending/edit"
                element={<GuestChiefEdit />}
              ></Route>
              <Route
                path="nbm-employee-sending"
                element={<GuestDescriptionEmployee />}
              ></Route>
              <Route
                path="nbm-employee-sending/edit"
                element={<GuestEmployeeEdit />}
              ></Route>
            </Route>

            <Route path="inquiries/it-supply" element={<ItSupply />}></Route>
            <Route
              path="inquiries/it-supply/new"
              element={<ItSupplyNew />}
            ></Route>
            <Route
              path="inquiries/it-supply/:id"
              element={<ItSupplyDescription />}
            >
              <Route index element={<ItSupplyDescriptionCreate />}></Route>
              <Route
                path="department-sending"
                element={<ItSupplyDescriptionDepartment />}
              ></Route>
              <Route
                path="department-sending/edit"
                element={<ItSupplyDepartmentEdit />}
              ></Route>
              <Route
                path="it-sending"
                element={<ItSupplyDescriptionIt />}
              ></Route>
              <Route
                path="it-sending/edit"
                element={<ItSupplyItEdit />}
              ></Route>
            </Route>

            <Route path="inquiries/purchasing" element={<Purchasing />}></Route>
            <Route
              path="inquiries/purchasing/new"
              element={<PurchasingNew />}
            ></Route>
            <Route
              path="inquiries/purchasing/:id"
              element={<PurchasingDescription />}
            >
              <Route index element={<PurchasingDescriptionCreate />}></Route>
              <Route
                path="department-sending"
                element={<PurchasingDescriptionDepartment />}
              ></Route>
              <Route
                path="department-sending/edit"
                element={<PurchasingDepartmentEdit />}
              ></Route>
              <Route
                path="purchasing-sending"
                element={<PurchasingDescriptionPurchase />}
              ></Route>
              <Route
                path="purchasing-sending/edit"
                element={<PurchasingPurchaseEdit />}
              ></Route>
            </Route>

            <Route
              path="announcements"
              element={
                <Suspense fallback={<Loading />}>
                  <Announcements />
                </Suspense>
              }
            ></Route>

            <Route
              path="announcements/new"
              element={
                <Suspense fallback={<Loading />}>
                  <AnnouncementNew />
                </Suspense>
              }
            ></Route>

            <Route
              path="announcements/:id"
              element={
                <Suspense fallback={<Loading />}>
                  <Announcement />
                </Suspense>
              }
            ></Route>

            <Route
              path="announcements/:id/edit"
              element={
                <Suspense fallback={<Loading />}>
                  <AnnouncementEdit />
                </Suspense>
              }
            ></Route>

            <Route path="settings">
              <Route
                path="users"
                element={
                  <Suspense fallback={<Loading />}>
                    <Users />
                  </Suspense>
                }
              ></Route>
              <Route
                path="user-roles"
                element={
                  <Suspense fallback={<Loading />}>
                    <UserRoles />
                  </Suspense>
                }
              ></Route>
            </Route>

            <Route
              path="profile"
              element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              }
            >
              <Route
                path="account-settings"
                element={
                  <Suspense fallback={<Loading />}>
                    <AccountSettings />
                  </Suspense>
                }
              ></Route>
              <Route
                path="security-and-login"
                element={
                  <Suspense fallback={<Loading />}>
                    <SecurityAndLogin />
                  </Suspense>
                }
              ></Route>
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
