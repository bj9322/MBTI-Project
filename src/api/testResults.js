import axios from 'axios';

const API_URL = 'https://brainy-tarry-cerise.glitch.me';

// 테스트 결과 
export const getTestResults = async () => {
  const response = await axios.get(API_URL); 
  return response.data; 
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData); 
  return response.data; 
};