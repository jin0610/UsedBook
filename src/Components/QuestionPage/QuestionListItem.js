import "../Styles.css"
import {Link} from "react-router-dom"
import React, {useState} from 'react';


const QuestionListItem = ({onSaveData}) =>{
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
    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form);
        console.log(form);
        setForm({
            name: '',
            email:'',
            phone:'',
        })
    }
    return(
        <>
        <div>고객추가</div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">name
                <input required placeholder ="이름" type='text' name='name' value={form.name} onChange={handleChange}/>
                </label>

                <label htmlFor="email">Email
                <input required placeholder ="이메일" type='email' name='email' value={form.email} onChange={handleChange}/>
                </label>

                <label htmlFor="phone">phone
                <input required placeholder ="핸드폰" type='text' name='phone' value={form.phone} onChange={handleChange}/>
                </label>
            </div>
            <div>
                <button type='submit'>저장</button>
            </div>
        </form>
        </>
    )
}

export default QuestionListItem









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