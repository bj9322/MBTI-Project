import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr'; // 인증인가 서버

// 로그인 로직, 사용자 정보 콘솔 확인
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
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
    const token = localStorage.getItem("token"); 
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
};

// 프로필 업데이트 로직
export const updateProfile = async (formData) => {
    const token = localStorage.getItem("token");
    const response = await axios.patch(`${API_URL}/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
};

// 사용자 Id 값 추출, 내 게시물 삭제 시 사용
export const getUserId = async () => {
  const userProfile = await getUserProfile();
  return userProfile.id; 
};