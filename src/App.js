import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BookListPage from "./Pages/BookListPage";
import FindInfoPage from "./Pages/FindInfoPage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import MyPage from "./Pages/MyPage";
import SignUpPage from "./Pages/SignUpPage";
import QuestionListPage from "./Pages/QuestionListPage";
import QuestionView from "./Components/QuestionView";
import QuestionInsertPage from "./Pages/QuestionInsertPage";
import QuestionEditPage from "./Pages/QuestionEditPage";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/find" element={<FindInfoPage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/booklist" element={<BookListPage/>}/>
        <Route path="/qna" element={<QuestionListPage/>}/>
        <Route path="/qnaview" element={<QuestionView/>}/>
        <Route path="/qnainsert" element={<QuestionInsertPage/>}/>
        <Route path="/qnaedit" element={<QuestionEditPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

/* 
/*
- qna 기능 -
1. 관리자가 댓글달기 ---> 왕규오빠랑 상의
2. qna 수정기능 --------> 기능 없애버리자
3. qna 삭제기능 ---------> 유저 본인 확인 후 내 qna 삭제하기

- qna 통신 - 
1. qna등록버튼 누르면 번호 확인 후 등록이 완료되었습니다. alert 뜨게하기
(내가 작성한 내용들이 보내기)
2. db에서 qna리스트 받아와서 띄우기
3. qna삭제버튼을 누르면 삭제되었다는 정보를 보내고 서버에서 삭제되었다는
응답을 받으면(번호) alert 띄우기


- 회원가입 container 완료
- 비밀번호 찾기
- mypage : 비밀번호 변경
- mypage : 판매, 대여, 구매 리스트 
- books : 등록
- books 구매 시 알람 가기
- books : 리스트 띄우기
*/
