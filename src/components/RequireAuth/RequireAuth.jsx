import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const location = useLocation();
  const { loggedUser } = useSelector((state) => state.app);

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
