# 프로젝트 소개

MBTI 테스트를 할 수 있는 페이지 입니다.

# 개발기간

24.11.25 ~ 24.11.28

# 주요 기능

1. route 폴더 : 로그인했을때와 로그인을 하지 않았을때를 구분하기 위해 PublicRoute, PrivateRoute로 경로 설정

2. auth.js : axios를 활용하여 서버에 정보를 post, get, update 하는 기능

3. Login.jsx , SignUp.jsx : AuthForm.jsx 에서 로그인, 회원가입을 처리하는 로직을 가져와 화면에 렌더링

4. TestResult.jsx, TestResultList.jsx : MBTI 테스트의 결과를 화면에 렌더링, 로그인했을때의 id값을 변수로 받아 내 게시물만 삭제할 수 있도록 설정

# 주요 라이브러리

1. React

2. json-server

3. sweetalert2

# 기능동작 스크린샷

![스크린샷 2024-11-28 093217](https://github.com/user-attachments/assets/8954c2e1-6572-4433-a2f6-ba8f63e25cf5)
로그인 버튼이 구현되어 있고 로그인이 되어있지 않으면 다른 페이지로 이동 불가능하게 구현

![스크린샷 2024-11-28 093239](https://github.com/user-attachments/assets/19bab498-e6b0-4483-9fe0-d5f2582ba133)
로그인 완료 홈페이지

![스크린샷 2024-11-28 093254](https://github.com/user-attachments/assets/2fdeb227-4cb3-4e4d-bed5-e928337aacb1)
프로필 업데이트 페이지

![스크린샷 2024-11-28 093318](https://github.com/user-attachments/assets/dde0dd0d-f8ff-4078-be47-4b8901d9c19c)
MBTI 테스트 화면

![스크린샷 2024-11-28 093623](https://github.com/user-attachments/assets/54e71667-28c5-46f3-92ea-7301482919dd)
MBTI 테스트 완료 화면

![스크린샷 2024-11-28 093634](https://github.com/user-attachments/assets/3f754394-aafe-466e-9167-9fbe458065f0)
테스트 결과화면으로 이동, 내 결과물만 삭제할 수 있도록 구현

![스크린샷 2024-11-28 093641](https://github.com/user-attachments/assets/23de1e7d-f1c7-46a0-beca-b2d17f7901a0)

![스크린샷 2024-11-28 093654](https://github.com/user-attachments/assets/3f72560f-bd6b-4b75-a5ee-cd70e803cdbd)
