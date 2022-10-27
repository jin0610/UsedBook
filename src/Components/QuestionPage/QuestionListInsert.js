import "../Styles.css"
import {Link} from "react-router-dom"
import React, {useState, useRef, useEffect} from 'react';
import axios from "axios";
import api from '../../Api';


const QuestionListInsert = ({onSaveData}) =>{
    const [form, setForm] = useState({
        id:'',
        title:'',
        content:'',
        userId:JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID,
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    const{id,title, content, userId} = form;
    const data = {id,title, content, userId}

    api.post(`/boards?userId=${userId}`,data).then(res => {
        if(res.status===201){
            console.log(res);
            alert('질문이 정상적으로 등록되었습니다.')
        }
    })
    console.log(form);
}

    return(
        <div class="py-5 board_wrap">
        <div class = "container px-4 px-lg-5 mt-5 board_write_wrap">
        <p>Insert Question</p>
                <form onSubmit ={handleSubmit} class = "col-md-6 board_write" >
                        <div class="writeTitle">
                            <label htmlFor="title" >질문제목
                            <input required placeholder ="제목을 입력하시오" type='text' name='title' value={form.title} onChange={handleChange}/>
                            </label>
                        </div>
                    <div class="writeCont">
                        <label htmlFor="content">질문내용
                            <textarea required placeholder ="내용을 입력하시오" ype='text' name='content' value={form.content} onChange={handleChange}/>
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