import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./HomeForm.css"

const HomeForm = () =>{

    const [visible, setVisible] = useState(false);
    const [isOpen, setMenu] = useState(false);
    const college = ["본부직속", "생명산업과학대학", "사회과학대학", "인문예술대학","공과대학","사범대학","약학대학","미래융합대학", "융합전공"]
    const toggleMenu = () =>{
        setMenu(isOpen => !isOpen);
    }
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
                        <div>
                            {college.map((college) =>(<button onClick={()=>toggleMenu()}>{college}</button>))}
                        </div>
                        {isOpen &&
                            <ul>
                                <li>1</li>
                                <li>2</li>
                            </ul>
                        }
                    </div>
                }


            </div>
            
        </div>
    )
}

export default HomeForm;


// https://fonts.google.com/icons?preview.size=37