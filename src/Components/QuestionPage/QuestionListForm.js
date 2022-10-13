import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';
import Tr from './Tr';
import QuestionListInsert from "./QuestionListInsert";
import "../Styles.css"

const QuestionListForm = () =>{
    
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');

    //ref로 변수 담기
    const nextId = useRef(11);

    //초기화면에 바로 데이터 갖고오기
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    }, []);

    

    const handleSave = (data) => {
        if(data.id){ //데이터 수정
            setInfo(
                info.map(row => data.id === row.id ? 
                {
                    id: data.id,
                    name: data.name,
                    email:data.email,
                    phone: data.phone,
                    
                }: row))
                } else { //데이터 추가
                    setInfo(info => info.concat(
                        {
                            id: nextId.current,
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            
                        }
                        ))
             nextId.current +=1;
         }
    }
    const handleRemove = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }
    
    
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
                        <th class="num">번호</th>
                        <th class="title">제목</th>
                        <th class="std_num">학번</th>
                        <th class="name">이름</th>
                        <th class="remove">삭제</th>
                    </tr>
                </thead>
                <Tr info = {info} handleRemove ={handleRemove} />

                
            </table>
            <QuestionListInsert onSaveData = {handleSave}/>
        </section>
        </>
    );
};
        
            
    
export default QuestionListForm

/*https://goddino.tistory.com/154 */








/*
const QuestionListForm = () =>{
    return( 
        <>
            
            <section class="bg-dark py-5" id="search">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white mb-5">
                        <h1 class="display-4 fw-bolder">Q & A</h1>
                    </div>

                   
                    <form id="SearchForm">
                        <div class="row justify-content-center mb-4 mt-5">
                            <div class="col-7 form-group">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Q & A SEARCH"/>
                                    <button class="btn btn-primary" type="button" id="button-addon2">검색</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        
            <section class ="py-5 board_wrap">
                <div class ="container px-4 px-lg-5 mt-5 board_list_wrap">
                    <div class = "col-md-6 board_list">
                        <div class="top">
                            <div class="num">번호</div>
                            <div class="title">제목</div>
                            <div class="writer">글쓴이</div>
                            <div class="date">작성일</div>
                        </div>
                        <div>
                        <QuestionListItem qnanum="5" qnatitle="제목" qnawriter="신서영" qnadate="2022.10.04"/>
                        </div>
                        <div>
                        <QuestionListItem qnanum="4" qnatitle="제목" qnawriter="신서영" qnadate="2022.10.03"/>
                        </div>
                        <div>
                        <QuestionListItem qnanum="3" qnatitle="제목" qnawriter="신서영" qnadate="2022.10.02"/>
                        </div>
                        <div>
                        <QuestionListItem qnanum="2" qnatitle="제목" qnawriter="신서영" qnadate="2022.10.01"/>
                        </div>
                        <div>
                        <QuestionListItem qnanum="1" qnatitle="제목" qnawriter="신서영" qnadate="2022.09.04"/>
                        </div>
                    </div>
                    <div class = "bt_wrap">
                        <div class ="offset-1 btn btn-outline-dark flex-shrink-0">
                            <a href="/qnainsert" class ="on me-1"> 등록 </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuestionListForm

*/