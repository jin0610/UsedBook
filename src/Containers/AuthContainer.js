import { useEffect, useState } from "react"
import Navigation from "../Components/Navigation"
import api from "../Api"
import {getCookie, setCookie} from "./Cookies"

const AuthContainer = () =>{
    const [loginForm, setLoginForm] = useState({
        id:'',
        password:''
    })
    useEffect(()=>{
        setLoginForm({
            id:'',
            password:''
        })
    })
    const loginFormChange = (e)=>{
        const {value, id} = e.target
        setLoginForm({
            ...loginForm,
            [id] : value
            
        })
    }
    const login=e=>{
        e.preventDefault()
        const {id, password} = loginForm
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
    return(
        <Navigation
            loginForm={loginForm}
            loginFormChange={loginFormChange}
            login={login}
        />
    )
}

export default AuthContainer