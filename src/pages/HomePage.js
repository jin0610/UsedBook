import React from "react";
import {Link} from "react-router-dom";

const HomePage = () =>{
    return(
        <div>
            HomePage
            <Link to="/mypage">mypage</Link>
        </div>
    )
}

export default HomePage;