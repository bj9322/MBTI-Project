import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");

  // 로그인 상태면 HomePage로 리다이렉트
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
