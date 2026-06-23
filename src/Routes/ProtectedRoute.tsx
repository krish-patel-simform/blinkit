import { getUserId } from "../utils";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const uid = getUserId();

  //   console.log("Protected route called : ", uid);

  if (!uid) return <Navigate to={"/login"} replace />;

  return <Outlet />;
}
