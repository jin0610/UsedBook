import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='mypage' element={<MyPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
