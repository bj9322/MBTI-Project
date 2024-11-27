import React, { useState } from "react";
import { updateProfile } from "../api/auth";
import styled from "styled-components";
import Swal from "sweetalert2";

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (imgFile) {
        formData.append("avatar", imgFile);
      }
      formData.append("nickname", nickname);

      const updatedProfile = await updateProfile(formData);

      Swal.fire({
        title: "프로필 업데이트 성공!",
        text: "프로필이 성공적으로 업데이트되었습니다.",
        icon: "success",
        confirmButtonColor: "#cc0000",
      });

    } catch (error) {
      console.error("프로필 업데이트 실패:", error.message);

      Swal.fire({
        title: "업데이트 실패",
        text: "프로필 업데이트 중 문제가 발생했습니다. 다시 시도해주세요.",
        icon: "error",
        confirmButtonColor: "#cc0000",
      });
    }
  };

  return (
    <Container>
      <ContentBox>
        <Title>프로필 수정</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>닉네임</Label>
            <Input
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="닉네임을 입력하세요"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label>프로필 이미지</Label>
            <FileInput type="file" onChange={handleFileChange} accept="image/*" />
          </InputGroup>
          <SubmitButton type="submit">프로필 업데이트</SubmitButton>
        </Form>
      </ContentBox>
    </Container>
  );
};

export default Profile;

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
  max-width: 500px;
  width: 90%; 
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #cc0000;
    outline: none;
  }
`;

const FileInput = styled.input`
  font-size: 1rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 12px;
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
