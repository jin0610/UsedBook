import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./HomeForm.css"
import Department from "./Department.json";

const HomeForm = () =>{
    
    const [visible, setVisible] = useState(false);
    const [isOpen, setMenu] = useState(false);
    const [departmentList, setDepartmentList] = useState([]);
    const toggleMenu = (myCollege) =>{
        setMenu(isOpen => !isOpen);
        setDepartmentList(Department.departments.filter(department => (department.college === myCollege)))
    }
    return(
        <div className="homeform">
            <div className="searchboxblock">
                <input type="text"  className="searchbox"/>
                <button className="material-symbols-outlined">search</button>
            </div>
                <div>
                    <button onClick={()=>{setVisible(!visible)}}>{visible? "학과 숨기기" :"학과 보이기"}</button>
                    {visible && 
                        <div>  
                            {Department.colleges.map((college)=>
                                <button key={college.id} onClick={()=>{toggleMenu(college.college);}}>{college.college}</button>)}
                            {
                                <ul className={isOpen?"show-menu" : "hide-menu"}>
                                    {departmentList.map(department => <li className="departmentList"> <a  href="#" key={department.id}>{department.department}</a></li>)}
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