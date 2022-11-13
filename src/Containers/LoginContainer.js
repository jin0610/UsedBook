import { useEffect, useState } from "react"
import api from "../Api"
import LoginForm from "../Components/AuthPage/LoginForm"

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
            if(res.status === 200){
                
                const SessionAttrs = {USER_TYPE:"USER", SESSION_ID:id}
                sessionStorage.setItem("Session_Attrs", JSON.stringify(SessionAttrs))
                const name="Session_Attrs"
                
                console.log("로그인 성공")
                window.location.href = '/booklist'
                
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