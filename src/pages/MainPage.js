import React from "react";
import Background from "../components/MainPage/Background"
import Contents from "../components/MainPage/Contents"
import Sns from "../components/MainPage/Sns"
import PageMainBlock from "../components/PageMainBlock"

const MainPage = () =>{
    return(
        <PageMainBlock>
            <Background/>
            <Contents/>
            <Sns/>
        </PageMainBlock>    
    )
}

export default MainPage;