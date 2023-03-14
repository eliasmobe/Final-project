import { Outlet, Navigate } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import { useAuthContext } from "../../context/AuthContext";

export default function PrivateRoute() {
  const { userLogin } = useAuthContext();

  if (!userLogin) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
