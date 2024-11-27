import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";
import styled from "styled-components";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      const response = await register(formData);
      if (response.success) {
  
        Swal.fire({
          title: "회원가입 성공!",
          text: "로그인 페이지로 이동합니다.",
          icon: "success",
          confirmButtonColor: "#cc0000",
        }).then(() => navigate("/login")); 
      } else {
    
        Swal.fire({
          title: "회원가입 실패",
          text: "다시 시도해주세요.",
          icon: "error",
          confirmButtonColor: "#cc0000",
        });
      }
    } catch (error) {
 
      Swal.fire({
        title: "오류 발생",
        text: "서버와 연결할 수 없습니다.",
        icon: "error",
        confirmButtonColor: "#cc0000",
      });
    }
  };

  return (
    <Container>
      <ContentBox>
        <Title>회원가입</Title>
        <AuthForm mode="signup" onSubmit={handleSignup} />
      </ContentBox>
    </Container>
  );
};

export default Signup;

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
