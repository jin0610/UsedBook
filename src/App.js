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
import QuestionViewPage from './Pages/QuestionViewPage';

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
        <Route path="/qnaview" element={<QuestionViewPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

/* 
/*
- qna 기능 -
1. 관리자가 댓글달기 -----------------------------------------> 왕규오빠와 상의. 그냥 안넣고싶음.

- qna 통신 - 
1. qna 등록시 정보들을 보내주기, 통신(post) ------------------> 완료
2. qna view하면 내가 누른 번호 질문이 보이기 -----------------> 완료



- 회원가입 container 완료
- 비밀번호 찾기
- mypage : 비밀번호 변경
- mypage : 판매, 대여, 구매 리스트 
- books : 등록
- books 구매 시 알람 가기
- books : 리스트 띄우기
*/
