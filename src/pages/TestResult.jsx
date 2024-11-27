import React, { useEffect, useState } from "react";
import TestResultList from "../components/TestResultList";
import axios from "axios";

const TestResult = () => {
  const [testResults, setTestResults] = useState([]);

  const getTestResults = async () => {
      const response = await axios.get("http://localhost:5000/testResults");
      const results = response.data;

      const filteredResults = results.filter(
        (result) => result.visibility || result.userId === userId
      );
      setTestResults(filteredResults);
  };

  useEffect(() => {
    getTestResults();
  }, []);

  return (
    <div>
      <TestResultList results={testResults} />
    </div>
  );
};

export default TestResult;
