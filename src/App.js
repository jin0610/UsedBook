import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BookListPage from "./Pages/BookListPage";
import FindInfoPage from "./Pages/FindInfoPage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import MyPage from "./Pages/MyPage";
import SignUpPage from "./Pages/SignUpPage";
import QuetionListPage from "./Pages/QuetionListPage";
import QuetionView from "./Components/QuetionView";
import QuetionInsertPage from "./Pages/QuetionInsertPage";
import QuetionEditPage from "./Pages/QuetionEditPage";

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
        <Route path="/qna" element={<QuetionListPage/>}/>
        <Route path="/qnaview" element={<QuetionView/>}/>
        <Route path="/qnainsert" element={<QuetionInsertPage/>}/>
        <Route path="/qnaedit" element={<QuetionEditPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;

/* 
완전히 완료한 페이지 : header, login, find__id, find__pwd
안에 글씨 내용만 바꾸면 되는 페이지: main, book__list
현재 수정중인 페이지 : 책정보 페이지 css
구현하지 못한 페이지 : 회원가입, qna 신청목차, 예약&구매창, 관리자페이지, 내정보페이지
(qna신청 양식은 main페이지 하단에 있는 양식 그대로 사용할지 상의해보기!)

*/