import { useEffect, useState } from "react";
import SignupForm from "../Components/AuthPage/SignupForm"
import Api from "../Api"
const queryString = require('query-string');

const SignupContainer = () =>{
    // 회원가입 post /users
    // {"id":"user6","email":"user6@naver.com","password":"1234","name":"이름6","phoneNumber":"010-6666-6666","studentId":"20176666","departmentId":null,"type":"USER"}
    const [form, setForm] = useState({
        id:"",
        name:"",
        password:"",
        password2:"",
        email: "",
        phoneNumber:"",
        studentId:"",
        
    })

    const onChange = e => {
        const { value, id } = e.target;
        setForm({
            ...form,
            [id] : value
        })
    };
// {"id":"user6","email":"user6@naver.com","password":"1234","name":"이름6","phoneNumber":"010-6666-6666","studentId":"20176666","departmentId":null,"type":"USER"}
    //폼 등록 이벤트 핸들러
    const onSubmit =e =>{
        e.preventDefault();
        const { id,name, studentId,  password, password2, email, phoneNumber} = form;
        // 하나라도 비어있다면
        if([id,name, studentId, name, password, password2, email, phoneNumber].includes('')){
            alert('빈칸을 모두 입력하세요.');
            return;
        }
        if (password !== password2){
            alert('비밀번호가 일치하지 않습니다.');
            setForm({
                ...form,
                password: '',
                password2: '',
            })
            return;
        }
        const data = {
            id, studentId, name, password, email, phoneNumber,departmentId:null ,type:"USER"
        };
        Api.post('/users',data).then(res => {
            console.log(res)
            console.log(data)
    
            if(res.status=== 201){
                console.log('회원가입 성공');
                alert('회원가입 성공');
                document.location.href = '/'
            }
            
        })
        console.log(form)
    };

    // 컴포넌트가 처음 렌더링될때 form을 초기화함
    useEffect(() => {
        setForm({
            id:"",
            name:"",
            password:"",
            password2:"",
            email: "",
            phoneNumber:"",
            studentId:"",
        })
    }, []);

    return(
        <SignupForm form={form}
        onChange={onChange}
        onSubmit={onSubmit}/>
    )
}

export default SignupContainer