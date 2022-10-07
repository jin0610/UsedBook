import axios from "axios"

const Client = axios.create({
    baseURL: '',
    headers:{
        "Content-Type":"",
        "Accept": "*/*",
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