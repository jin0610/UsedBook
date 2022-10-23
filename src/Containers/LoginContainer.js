import { useEffect, useState } from "react"
import api from "../Api"
import LoginForm from "../Components/AuthPage/LoginForm"
import {getCookie, setCookie} from "./Cookies"

const LoginContainer = () =>{
    // 로그인 post /users/login
    // {"id":"user3","email":null,"password":"1234","name":null,"phoneNumber":null,"studentId":null,"type":null}

    const [form, setForm] = useState({
        id:"",
        password : ""
    })

    const onChange = (e) =>{
        const { value, id }= e.target
        setForm({
            ...form,
            [id] : value
        })
    }

    
    const onSubmit=e=>{
        e.preventDefault()
        const {id, password} = form
        // const data = { id, studentId:null, name:null, password, email:null, phoneNumber:null,departmentId:null ,type:null}
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
        console.log(data)
    }

    useEffect(() => {
        setForm({
            id: '',
            password: ''
        })
    }, []);

    
    return(
        <LoginForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    )
}

export default LoginContainer