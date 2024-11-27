import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      const response = await register(formData); // API 호출
      if (response.success) {
        alert(response.message); // 서버에서 받은 성공 메시지 출력
        navigate("/login");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <AuthForm mode="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;
