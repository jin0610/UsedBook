import React from "react";
import PageMainBlock from "../components/PageMainBlock";
import QnAForm from "../components/QnAPage/QnAForm";
import Header from "../components/Header/Header"

const QnAPage = () =>{
    return(
        <PageMainBlock>
            <Header/>
            <QnAForm/>
        </PageMainBlock>
    )
}

export default QnAPage;