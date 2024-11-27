import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserId } from "../api/auth";
import Swal from "sweetalert2";
import styled from "styled-components";

const TestResult = () => {
  const [testResults, setTestResults] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserIdAndResults = async () => {
      const id = await getUserId();
      setUserId(id);

      const resultsResponse = await axios.get("http://localhost:5000/testResults");
      setTestResults(resultsResponse.data);
    };

    fetchUserIdAndResults();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "삭제하시겠습니까?",
      text: "삭제한 결과는 복구할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#cc0000",
      cancelButtonColor: "#aaa",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    });

    if (result.isConfirmed) {
      await axios.delete(`http://localhost:5000/testResults/${id}`);
      setTestResults((prevResults) =>
        prevResults.filter((result) => result.id !== id)
      );

      Swal.fire({
        title: "삭제 완료!",
        text: "테스트 결과가 삭제되었습니다.",
        icon: "success",
        confirmButtonColor: "#cc0000",
      });
    }
  };

  return (
    <Container>
      <Title>테스트 결과</Title>
      <ResultList>
        {testResults.map((result) => (
          <ResultItem key={result.id}>
            <ResultTitle>결과: {result.result}</ResultTitle>
            <ResultDescription>{result.description}</ResultDescription>
            {result.userId === userId && (
              <DeleteButton onClick={() => handleDelete(result.id)}>
                삭제
              </DeleteButton>
            )}
          </ResultItem>
        ))}
      </ResultList>
    </Container>
  );
};

export default TestResult;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ResultItem = styled.li`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ResultTitle = styled.h2`
  font-size: 1.5rem;
  color: #cc0000;
`;

const ResultDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const DeleteButton = styled.button`
  align-self: flex-start;
  padding: 8px 16px;
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
