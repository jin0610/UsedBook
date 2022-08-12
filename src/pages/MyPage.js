import React from "react";
import PageMainBlock from "../components/PageMainBlock"
import MyPageForm from '../components/MyPage/MyPageFrom';
import Header from "../components/Header/Header"

const MyPage = () =>{
    return(
        <PageMainBlock>
            <Header/>
            <MyPageForm/>
        </PageMainBlock>    
    )
}

export default MyPage;