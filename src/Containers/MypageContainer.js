import { useEffect, useState } from "react"
import MyPageForm from "../Components/MyPage/MyPageForm"
import api from "../Api"


const MypageContainer = () =>{
    const [reservationList, setReservationList] = useState([])
    const [reservedList, setReservedList] = useState([])
    const [writeList, setwriteList] = useState([])

    const [userinfo, setUserInfo] = useState({
        email : "",
        id : "",
        name : "",
        password  : "",
        phoneNumber : "",
        studentId : "",
        type : ""
    });

    if((!reservationList)) setReservationList([
        {bookDto:{id:0, name:null, author:null, image:"https://dummyimage.com/150x250/dee2e6/6c757d.jpg", price:null, publisher:null, publicationDate:null}}])

    if((writeList.length === 0) || (!writeList) ) setwriteList([{id:0, name:null, author:null, price:null, publisher:null, publicationDate:null, image:"https://dummyimage.com/150x250/dee2e6/6c757d.jpg"}])

    if((reservedList.length === 0) || (!reservedList)) setReservedList([ {bookDto:{id:0, name:null, author:null, image:"https://dummyimage.com/150x250/dee2e6/6c757d.jpg", price:null, publisher:null, publicationDate:null},reservationDto:{phoneNumber:null}}])

    const userId = JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID
    useEffect(() => {
        setDeleteForm({
            id: '',
            password: ''
        })            

        // 유저정보보기 get /users
        api.get(`/users?userId=${userId}`)
        .then(res =>{
            setUserInfo(res.data)
        }).catch(error => console.log(error))

        // 유저가 작성한 책정보 보기 get /users/books 
        api.get(`/users/books?userId=${userId}`)
        .then(res =>{
            setwriteList(res.data)
        })
        .catch(error => console.log(error))

        // 예약한 목록 보기
        api.get(`/reservations/request?userId=${userId}`)
        .then(res => {
            setReservationList(res.data)
        })    
        .catch(err=>console.log(err))

        // 예약 받은 목록
        api.get(`/reservations/response?userId=${userId}`)
        .then(res => {
            setReservedList(res.data)
            
        })
        .catch(err => console.log(err))

    }, []);
    
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
        api.post(`/users/books?userId=${JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID}`, data)
        .then(res=>{
            alert("탈퇴 성공")
        })
        .catch(error =>{
            console.log(error)
            alert(error)
        })
    }
    
    
    return(
        <MyPageForm
            changeform={changeform}
            changeformChange={changeformChange} 
            changeSubmit={changeSubmit}
            deleteform={deleteform}
            deleteChange={deleteChange}
            userDelete={userDelete}
            userinfo={userinfo}
            reservationList={reservationList}
            writeList={writeList}
            reservedList={reservedList}
        />
    )
}

export default MypageContainer
