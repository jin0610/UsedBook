import React from "react";
import PageMainBlock from "../components/PageMainBlock"
import HomeForm from '../components/HomePage/HomeForm';
import Header from "../components/Header/Header"

const HomePage = () =>{
    return(
        <PageMainBlock>
            <Header/>
            <HomeForm/>
        </PageMainBlock>    
    )
}

export default HomePage;