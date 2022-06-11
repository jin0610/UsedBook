import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./HomeForm.css"

const HomeForm = () =>{

    const [visible, setVisible] = useState(false);

    return(
        <div class="homeform">
            <Link to="/mypage">mypage</Link>
            <div class="searchboxblock">
                <input type="text"  class="searchbox"/>
                <button class="material-symbols-outlined">search</button>
            </div>
            <div>
                <button onClick={()=>{setVisible(!visible)}}>
                    {visible? "학과 숨기기" :"학과 보이기"}
                </button>
                {visible && 
                    <div>
                        학과
                    </div>
                }


            </div>
            
        </div>
    )
}

export default HomeForm;


// https://fonts.google.com/icons?preview.size=37