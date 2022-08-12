import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';

import FindAccountPage from './pages/FindAccountPage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';

import './App.css';
import QnAPage from './pages/QnAPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/'element={<MainPage/>}/>
        <Route path='/join' element={<SignUpPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path='/bookinfo'/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/qna' />
        <Route path='/manager'/>
        <Route path='/account' element={<FindAccountPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 1. 로그인 페이지 : /
// 2. 회원가입 페이지 : /join
// 3. 홈페이지(검색) : /home
// 4. 책 정보 페이지 : /bookinfo
// 5. 마이페이지 : /mypage
// 6. QnA 페이지 : /qna
// 7. 관리자 페이지 : /manager
