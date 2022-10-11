import { useEffect, useState } from "react"
import MyPageForm from "../Components/MyPage/MyPageForm"
import Api from "../Api"
const queryString = require('query-string');

const MypageContainer = () =>{

    // 유저 삭제
    const [deleteform, setDeleteForm] = useState({
        std_num:"",
        password:""
    })

    const deleteChange = (e) =>{
        const { value, id }= e.target
        setDeleteForm({
            ...deleteform,
            [id] : value
        })
    }
    
    const userDelete =(e) =>{
        e.preventDefault();
        const {std_num, password} = deleteform
        const data = { std_num, password}
        // Api.delete('/users', queryString.stringify(data))
        // .then(res=>{
        //     console.log(res)
        //     alert("탈퇴 성공")
        // })
        // .catch(error =>{
        //     console.log(error)
        //     alert(error)
        // })
        console.log(deleteform)
    }
    useEffect(() => {
        setDeleteForm({
            std_num: '',
            password: ''
        })
    }, []);
    
    return(
        <MyPageForm
            deleteform={deleteform}
            deleteChange={deleteChange}
            userDelete={userDelete}
        />
    )
}

export default MypageContainer
