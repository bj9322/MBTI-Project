import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr'; // 인증인가 서버

// 로그인 로직
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData); // 엔드포인트 변경
  localStorage.setItem("token", response.data.accessToken);
  const userProfile = await getUserProfile();
  console.log("로그인 후 사용자 정보:", userProfile);

  return { ...response.data, userProfile };
};

// 회원가입 로직
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// 사용자 정보 가져오기 로직
export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
    if (!token) {
      throw new Error("로그인 토큰이 없습니다. 다시 로그인해주세요.");
    }

    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "사용자 정보 가져오기 실패:",
      error.response?.data || error.message
    );
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("사용자 정보를 가져오는 중 문제가 발생했습니다.");
  }
};

// 프로필 업데이트 로직
export const updateProfile = async (formData) => {
  console.log(formData)
  try {
    const token = localStorage.getItem("token"); // 토큰 가져오기
    const response = await axios.patch(`${API_URL}/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("프로필 업데이트 실패:", error.response?.data || error.message);
    throw error;
  }
};
