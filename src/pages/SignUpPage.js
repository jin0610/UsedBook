import React from "react";
import Header from "../components/Header/Header"
import SignUp from "../components/SignUpPage/SignUp"
import PageMainBlock from "../components/PageMainBlock"


const SignUpPage = () =>{
    return(
        <PageMainBlock>
            <Header/>
            <SignUp/>
        </PageMainBlock>    
    )
}

export default SignUpPage;