import { useEffect, useState } from "react"
import Navigation from "../Components/Navigation"
import api from "../Api"
import {getCookie, setCookie} from "./Cookies"

const AuthContainer = () =>{
    const [form, setForm] = useState({
        id:null,
        name:null,
        password:null,
        password2:null,
        email: null,
        phoneNumber:null,
        studentId:null,
    })
    useEffect(()=>{
        setForm({
            id:null,
            name:null,
            password:null,
            password2:null,
            email: null,
            phoneNumber:null,
            studentId:null,
        })
        
    },[])
    const formChange = (e)=>{
        const {value, id} = e.target
        setForm({
            ...form,
            [id] : value
            
        })
    }
    const login=e=>{
        e.preventDefault()
        const {id, password} = form
        const data = {id, password}
        api.post('/users/login',data).then(res => {
            // 세션 저장
            console.log(res)
            if(res.status === 200){
                
                const SessionAttrs = {USER_TYPE:"USER", SESSION_ID:id}
                sessionStorage.setItem("Session_Attrs", JSON.stringify(SessionAttrs))
                const name="Session_Attrs"
                
                setCookie(name,{USER_TYPE:"USER", SESSION_ID:id},{path:'/'})
                getCookie("Session_Attrs")
                // api.defaults.Session_Attrs={USER_TYPE:"USER", SESSION_ID:id}
                console.log("로그인 성공")
                window.location.href = '/booklist'
                
                // window.location.href = '/main'
                // sessionStorage.setItem("user", res.data)
                // Session Attrs = {USER_TYPE=USER, SESSION_ID=user2}
                
            }
        })
    }
    const signup =e =>{
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
            api.post('/users',data).then(res => {
                console.log(res)
                console.log(data)
        
                if(res.status=== 201){
                    console.log('회원가입 성공');
                    alert('회원가입 성공');
                    document.location.href = '/'
                }
                
            })
        }
    return(
        <Navigation
            loginForm={form}
            loginFormChange={formChange}
            login={login}
            signup={signup}
        />
    )
}

export default AuthContainer