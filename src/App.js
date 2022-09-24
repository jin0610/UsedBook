
import './App.css';
import { Component } from 'react';
import Main from './main_component';
import SignUp from '../src/signup/SignUp'
import Header from './header/Header'
import BookList from './book__list/book__list'
import Login from './login/Login';
import Find__PWD from './findAccount/findPWD';
import Find__ID from './findAccount/findID';
import BookDetail from './book_detail/book__detail';

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Header></Header>
        <BookDetail></BookDetail>
        
      </div>
    )
  }
}


export default App;

/* 
완전히 완료한 페이지 : header, login, find__id, find__pwd
안에 글씨 내용만 바꾸면 되는 페이지: main, book__list
현재 수정중인 페이지 : 책정보 페이지 css
구현하지 못한 페이지 : 회원가입, qna 신청목차, 예약&구매창, 관리자페이지, 내정보페이지
(qna신청 양식은 main페이지 하단에 있는 양식 그대로 사용할지 상의해보기!)

*/