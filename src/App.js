import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';

import FindAccountPage from './pages/FindAccountPage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';

import './App.css';

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


/* 해야하는 일 
1. route 지정하기
2. 자바스크립트 동적효과 적용
3. 버튼 이벤트
4. 목차 새로고침없이 부드럽게 넘어가기
5. 회원가입 버튼 추가하기
6. 글씨체, 아이콘 등 html말고 react에서는 어떻게 지정?
*/
