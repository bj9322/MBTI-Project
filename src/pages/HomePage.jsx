import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePage = ({ isAuthenticated }) => {
  return (
    <Container>
      <ContentBox>
        <Title>MBTI 테스트</Title>
        <Description>
          솔직하게 답변해야 정확한 결과가 나옵니다!
        </Description>
        {!isAuthenticated && (
          <StyledLink to="/login">로그인하기</StyledLink>
        )}
      </ContentBox>
    </Container>
  );
};

export default HomePage;

// 스타일 정의
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
  border: 2px solid #ffe6e6; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); 
  padding: 70px 50px; 
  text-align: center; 
  max-width: 600px; 
  width: 90%; 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 

  &:hover {
    transform: scale(1.02); 
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); 
  }
`;

const Title = styled.h1`
  font-size: 3rem; 
  color: #cc0000;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem; 
  color: #555; 
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  display: inline-block; 
  background-color: #cc0000; 
  color: white; 
  padding: 10px 20px; 
  border-radius: 8px; 
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none; 
  transition: background 0.3s ease;

  &:hover {
    background-color: #ff6666; 
  }
`;
