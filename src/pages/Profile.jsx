import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [imgFile, setImgFile] = useState(null); // 이미지 파일 상태 추가

  // 닉네임 변경 핸들러
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // 파일 변경 핸들러
  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]); // 선택된 파일 저장
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (imgFile) {
      formData.append("avatar", imgFile); // 업로드할 이미지 파일 추가
      }
      formData.append("nickname", nickname); // 변경할 닉네임 추가
      const updatedProfile = await updateProfile(formData);
      console.log("프로필 업데이트 성공:", updatedProfile);
    } catch (error) {
      console.error("프로필 업데이트 실패:", error.message);
    }
  };

  return (
    <div>
      <h1>프로필 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>닉네임</label>
          <input
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="닉네임을 입력하세요"
            required
          />
        </div>
        <div>
          <label>프로필 이미지</label>
          <input type="file" onChange={handleFileChange} accept="image/*" /> {/* 파일 입력 추가 */}
        </div>
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;
