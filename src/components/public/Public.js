import { Outlet, Navigate } from "react-router-dom";
import { US } from "../../config/routes/paths";
import { useAuthContext } from "../../context/AuthContext";

export default function PublicRoute() {
  const { userLogin } = useAuthContext();

  if (userLogin) {
    return <Navigate to={US} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
