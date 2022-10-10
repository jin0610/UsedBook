import { useEffect, useState } from "react"
import api from "../Api"
import LoginForm from "../Components/LoginForm"
const queryString = require('query-string');

const LoginContainer = () =>{

    const [form, setForm] = useState({
        std_num:"",
        password : ""
    })

    const onChange = (e) =>{
        const { value, name }= e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    
    const onSubmit=e=>{
        e.preventDefault()
        const {std_num, password} = form
        const data = { std_num, password}
        // Client.post('/login',queryString.stringify(data)).then(res => {
        //     // 세션 저장
        //     if(res.status === 200){
        //         window.location.href = '/main'
        //         localStorage.setItem("isAuthorized", "true")
        //         client.defaults.headers.common['x-access-token'] = res.data.token
        //     }
        // })
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