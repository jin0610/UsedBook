import { useEffect, useState } from "react"
import MyPageForm from "../Components/MyPage/MyPageForm"
import api from "../Api"

const MypageContainer = () =>{
    const [userinfo, setUserInfo] = useState();
    useEffect(() => {
        setDeleteForm({
            std_num: '',
            password: ''
        })
        setUserInfo(JSON.parse(sessionStorage.getItem('Session_Attrs')))
        console.log(userinfo)
        const SessionAttrs = userinfo
        api({
            method:'get',
            url:'/users/books',
            // SessionAttrs:{"USER_TYPE":"USER", "SESSION_ID":"1234"}
        }
            )
        .then((res)=>{
            console.log(res)
        }).catch(error=>console.log(error))
    }, []);
    // 유저정보보기 get /users
    // 유저가 작성한 판매 대여글 보기 get /users/book
    // 책 정보 변경 patch /books/{id}
    const bookChange = (id)=>{
        api.patch(`/books/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    // 책 삭제 delete /books/{id}
    const bookDelete = (id) =>{
        api.delete(`/books/${id}`)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    // 비밀번호 변경 -> 유저 정보 업데이트 patch /users
    const [changeform, setChangeForm]=useState({
        oldPwd:'',
        newPwd:'',
        newPwdCheck:''
    })

    const changeformChange=(e)=>{
        const {id, value} = e.target
        setChangeForm({
            ...changeform,
            [id]:value
        })
    }

    const changeSubmit=(e)=>{
        e.preventDefault();
        const {oldPwd, newPwd, newPwdCheck} = changeform
        if([oldPwd, newPwd, newPwdCheck].includes('')){
            alert('모두 입력하세요.');
            return;
        }
        if(newPwd === oldPwd){
            alert('같은 비밀번호로는 바꿀 수 없습니다.');
            return;
        }
        if (newPwd !== newPwdCheck){
            alert('비밀번호가 일치하지 않습니다.');
            setChangeForm({
                ...changeform,
                newPwd: '',
                newPwdCheck: '',
            })
            return;
        }
        const data = {oldPwd, newPwd}

        console.log("패스워드 변경 성공")
    }


    // 유저 삭제 delete /users
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
    
    
    return(
        <MyPageForm
            changeform={changeform}
            changeformChange={changeformChange} 
            changeSubmit={changeSubmit}
            deleteform={deleteform}
            deleteChange={deleteChange}
            userDelete={userDelete}
        />
    )
}

export default MypageContainer
