import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  // 로그아웃 상태면 Login 페이지로 리다이렉트
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
