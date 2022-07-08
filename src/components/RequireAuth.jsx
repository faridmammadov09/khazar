import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  const loggedUser = useSelector((state) => state.app.loggedUser);

  return (
    <>
      {loggedUser.fullName ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
