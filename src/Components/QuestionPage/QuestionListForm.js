import React, {useEffect, useState, useRef} from "react";
import QuestionListInsert from "./QuestionListInsert";
import api from "../../Api";
import Tr from './Tr';
import "../Styles.css"

const QuestionListForm = () =>{
    //ref로 변수 담기. 다음 qna등록 id는 8번부터 실행이 되도록
    const nextId = useRef(8);
    const [info, setInfo] = useState([]);

    //바로 데이터 갖고오기
    useEffect(() =>{
        api.get(`/boards`)
        .then(res =>setInfo(res.data))
        .then(error => console.log(error))
    }, []); 
    
    //데이터 추가
    const handleSave = (data) => {{
        setInfo(info => info.concat(
        {
            id: nextId.current,
            title: data.title,
            content: data.content,
            userId: data.userId,
        }
        ))
        nextId.current +=1; }}

    return(
        <>
        <section class="bg-dark py-5" id="search">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white mb-5">
                    <h1 class="display-4 fw-bolder">Q & A</h1>
                </div>
            </div>
        </section>
        <section class = "py-5 board_wrap" >
        <p>Question List</p>
            <table class ="container px-4 px-lg-5 mt-5 board_list_wrap board_list">
                <thead>
                    <tr class="top">
                        <th class="num">number</th>
                        <th class="title">title</th>
                        <th class="name">user</th>
                    </tr>
                </thead>
                <Tr info = {info} />
            </table>
            <QuestionListInsert onSaveData = {handleSave}/>
        </section>
        </>
    );
};
            
    
export default QuestionListForm