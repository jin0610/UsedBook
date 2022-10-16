import axios from "axios"

const Client = axios.create({
    baseURL: 'http://118.67.131.24:8080',
    headers:{
        "Content-Type":"application/json",
        
    }
})

// Client.interceptors.response.use(
//     response =>{
      
//       return response;
//     }, error => {
//       if(error.response.status === undefined) {
//         alert('실패')
//       }
//       if(error.response.status === 400){
//         if(error.response.data.msg === "Password is incorrect!"){
//           //Request failed with status code 400
//           alert('잘못된 이메일/비밀번호 입니다.');
//         }
//         if(error.response.data.msg === "User is aleady exist!"){
//           //Request failed with status code 400
//           alert('존재하는 이메일입니다.');
//         }
//       } 
//         return Promise.reject(error);
//       },
// )

export default Client

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