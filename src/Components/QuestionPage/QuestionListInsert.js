import "../Styles.css"
import {Link} from "react-router-dom"
import React, {useState, useRef} from 'react';
import axios from "axios";


const QuestionListInsert = ({onSaveData}) =>{
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    /* Post 2번방식 -> onSubmit에 집어넣기. body옆에 JSON.stringify 이런거 안적어도될까
    const qnaNameRef = useRef(null);
    const qnaEmailRef = useRef(null);
    const qnaPhoneRef = useRef(null);
    function qnaPost(e){
        e.preventDefault();
        console.log("qnaPost");
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            body: ({
                name: qnaNameRef.current.value,
                email: qnaEmailRef.current.value,
                phone: qnaPhoneRef.current.value,
            }),
        }).then(res=>{
            console.log(1);
        })
        .catch((err)=>{
            console.log(2)
        });
    }*/

    //위에 작성한 post 방식을 handlesubmit에 합쳐넣음
    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form);
        console.log(form);
        setForm({
            name: '',
            email:'',
            phone:'',
        })
        fetch('https://jsonplaceholder.typicode.com/users',{
            method: "POST",
            body: ({
                name:form.name,
                email:form.email,
                phone:form.phone,
        }),
    }).then(res=>{
        console.log(1);
    }).catch((err)=>{
        console.log(2);
    });
}

    

    return(
        <div class="py-5 board_wrap">
        <div class = "container px-4 px-lg-5 mt-5 board_write_wrap">
        <p>Insert Question</p>
                <form onSubmit={handleSubmit} class = "col-md-6 board_write" >
                    <div class="writeInfo">
                        <div class="writeInfoLeft">
                            <label htmlFor="name">이름
                            <input required placeholder ="이름" type='text' name='name' value={form.name} onChange={handleChange} /*2번방식일때 ref={qnaNameRef}*/ />
                            </label>
                        </div>
                        <div class="writeInfoRight">
                            <label htmlFor="email" >학번
                            <input required placeholder ="이메일" type='email' name='email' value={form.email} onChange={handleChange} /*2번방식일때  ref={qnaEmailRef}*/ />
                            </label>
                        </div>
                    </div>
                        <div class="writeTitle">
                            <label htmlFor="phone" >질문제목
                            <input required placeholder ="핸드폰" type='text' name='phone' value={form.phone} onChange={handleChange} /*2번방식일때 ref={qnaPhoneRef}*/ />
                            </label>
                        </div>
                    <div class="writeCont">
                        <label>질문내용
                            <textarea required placeholder ="내용" type='text'/>
                        </label>
                    </div>

                    <div class = "bt_wrap">
                        <div class = "offset-1 btn btn-outline-dark flex-shrink-0">
                        <button class="on me-1" type='submit'>저장</button>
                        </div>
                    </div>

                </form>
        </div>
        
        </div>
    )
}

export default QuestionListInsert









/*
const QuestionListItem = (props) =>{
    const {qnanum, qnatitle, qnawriter, qnadate} = props

    return(
        <>
        
            <div class="num">{qnanum}</div>
            <div class="title">
            <Link to='/qnaview' state={{
                qnanum:qnanum,
                qnatitle:qnatitle, 
                qnawriter:qnawriter, 
                qnadate:qnadate
            }}>{qnatitle}</Link></div>
            <div class="writer">{qnawriter}</div>
            <div class="date">{qnadate}</div>
        </>
                        
                        
    )
    
}

export default QuestionListItem
*/