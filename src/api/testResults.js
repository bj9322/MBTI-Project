import axios from 'axios';

const API_URL = 'http://localhost:5000/testResults'; // JSON 서버 엔드포인트

// 1. 테스트 결과 가져오기
export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL); // GET 요청
    return response.data; // 결과 리스트 반환
  } catch (error) {
    console.error('테스트 결과 가져오기 실패:', error.message);
    throw error;
  }
};

// 2. 테스트 결과 생성
export const createTestResult = async (resultData) => {
  try {
    const response = await axios.post(API_URL, resultData); // POST 요청
    return response.data; // 생성된 결과 반환
  } catch (error) {
    console.error('테스트 결과 생성 실패:', error.message);
    throw error;
  }
};

// 3. 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`); // DELETE 요청
    return response.data; // 삭제된 결과 반환
  } catch (error) {
    console.error('테스트 결과 삭제 실패:', error.message);
    throw error;
  }
};

// 4. 테스트 결과 가시성 업데이트
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, { visibility }); // PATCH 요청
    return response.data; // 업데이트된 결과 반환
  } catch (error) {
    console.error('테스트 결과 가시성 업데이트 실패:', error.message);
    throw error;
  }
};
