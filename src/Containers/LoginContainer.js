import { useEffect, useState } from "react"
import api from "../Api"
import LoginForm from "../Components/AuthPage/LoginForm"
const queryString = require('query-string');

const LoginContainer = () =>{
    // 로그인 post /users/login
    const [form, setForm] = useState({
        std_num:"",
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
        const {std_num, password} = form
        const data = { std_num, password}
        api.post('/users/login',data).then(res => {
            // 세션 저장
            console.log(res)
            if(res.status === 200){
                // window.location.href = '/main'
                sessionStorage.setItem("user", res.data)
                
                
            }
        })
        console.log(data)
    }

    useEffect(() => {
        setForm({
            std_num: '',
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