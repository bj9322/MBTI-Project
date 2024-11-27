import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";
import styled from "styled-components";
import Swal from "sweetalert2";

const Login = ({ setUser, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      setUser(response.user);
      setIsAuthenticated(true);
 
      Swal.fire({
        title: "로그인 성공!",
        text: "홈 페이지로 이동합니다.",
        icon: "success",
        confirmButtonColor: "#cc0000",
      }).then(() => navigate("/"));
    } catch (error) {
  
      Swal.fire({
        title: "로그인 실패",
        text: "아이디와 비밀번호를 확인해주세요.",
        icon: "error",
        confirmButtonColor: "#cc0000",
      });
    }
  };

  return (
    <Container>
      <ContentBox>
        <Title>로그인</Title>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <HelperText>
          계정이 없으신가요? <StyledLink to="/signup">회원가입</StyledLink>
        </HelperText>
      </ContentBox>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const ContentBox = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 40px 50px;
  text-align: center;
  max-width: 500px;
  width: 90%;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
`;

const HelperText = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #555;
`;

const StyledLink = styled(Link)`
  color: #cc0000;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #ff6666;
  }
`;
