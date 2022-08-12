import React from "react";
import Header from "../components/Header/Header"
import FindID from "../components/FindAccountPage/FindID"
import FindPWD from "../components/FindAccountPage/FindPWD"
import PageMainBlock from "../components/PageMainBlock"


const FindAccountPage = () =>{
    return(
        <PageMainBlock>
            <Header/>
            <FindID/>
            <FindPWD/>
        </PageMainBlock>
    )
}

export default FindAccountPage;