import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 처리: 인증 상태 초기화 및 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ccc" }}>
      {/* 좌측 메뉴 */}
      <div>
        <Link to="/" style={{ marginRight: "15px" }}>홈</Link>
        <Link to="/profile" style={{ marginRight: "15px" }}>프로필</Link>
        <Link to="/test" style={{ marginRight: "15px" }}>테스트</Link>
        <Link to="/test-result">테스트 결과</Link>
      </div>

      {/* 우측 메뉴 */}
      <div>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            style={{ background: "none", border: "none", cursor: "pointer", color: "blue" }}
          >
            로그아웃
          </button>
        ) : (
          <Link to="/login" style={{ color: "blue" }}>로그인</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
