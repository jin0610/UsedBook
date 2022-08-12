import React, { useState } from "react";
import { Link } from "react-router-dom";
import BorrowRecord from "./BorrowRecord";
import ChangePwd from "./ChangePwd";
import DealRecord from "./DealRecord";


const MyPageForm = () =>{
    const [currentTab, setCurrentTab] = useState(0);

    const menuArr = [
      { name: '거래 기록', content: <DealRecord/> },
      { name: '대출 기록', content: <BorrowRecord/> },
      { name: '비밀번호 변경', content: <ChangePwd/> },
    ];
  
    const selectMenuHandler = (index) => {
      setCurrentTab(index);
    };

    return(
        <div>
            <Link to={"/home"}>homepage</Link>
            {/* <div>
                <button>거래 기록</button>
                <button>대출 기록</button>
                <button>비밀번호 변경</button>
            </div>
            <DealRecord/>
            <BorrowRecord/>
            <ChangePwd/> */}
            <ul className="tabs is-boxed" id="TabMenu">
                <div className="TabMenu">
                    {menuArr.map((ele, index)=>{
                        return (
                        <li
                        key={index}
                        className={currentTab === index ? "submenu focused" : "submenu"}
                        onClick={()=> selectMenuHandler(index)}
                        >
                            <button>{ele.name}</button>
                        {ele.name}
                        </li>
                        )
                    })}

                    </div>
                    
            </ul>
            <div>
                        <h1>{menuArr[currentTab].content}</h1>
                        
                    </div>
    
        </div>
    )
}

export default MyPageForm;