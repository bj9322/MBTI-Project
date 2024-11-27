import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Nav>
      <NavLinks>
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/profile">프로필</StyledLink>
        <StyledLink to="/test">테스트</StyledLink>
        <StyledLink to="/test-result">테스트 결과</StyledLink>
      </NavLinks>

      <AuthArea>
        {isAuthenticated ? (
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        ) : (
          <StyledLink to="/login">로그인</StyledLink>
        )}
      </AuthArea>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px; 
  border-bottom: 2px solid #ddd; 
  background-color: #ffe6e6; 
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px; 
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #cc0000; 
  font-weight: bold;
  font-size: 1.3rem; 
  transition: color 0.3s ease;

  &:hover {
    color: #ff6666;
  }
`;

const AuthArea = styled.div`
  display: flex;
  align-items: center;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #cc0000;
  font-weight: bold;
  font-size: 1.2rem; 
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6666; 
  }
`;
