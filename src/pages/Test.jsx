import React, { useState, useEffect } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/auth";
import styled from "styled-components";

const Test = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const userProfile = await getUserProfile();
      setUserId(userProfile.id);
    };
    fetchUserId();
  }, []);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);

    const resultData = {
      userId: userId,
      result: mbtiResult,
      description: mbtiDescriptions[mbtiResult],
      visibility: true,
      createdAt: new Date().toISOString(),
    };

    await createTestResult(resultData);
    setResult(mbtiResult);
  };

  const handleNavigateToResults = () => {
    navigate("/test-result");
  };

  return (
    <Container>
      <ContentBox>
        {!result ? (
          <>
            <Title>MBTI 테스트</Title>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <Title>테스트 결과: {result}</Title>
            <Description>
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </Description>
            <NavigateButton onClick={handleNavigateToResults}>
              결과 페이지로 이동하기
            </NavigateButton>
          </>
        )}
      </ContentBox>
    </Container>
  );
};

export default Test;

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
  border: 2px solid #eee;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 40px 50px;
  text-align: center;
  max-width: 600px;
  width: 90%;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
`;

const NavigateButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  color: white;
  background-color: #cc0000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6666;
  }
`;
