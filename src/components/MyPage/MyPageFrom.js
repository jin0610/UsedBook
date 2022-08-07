import React from "react";
import { Link } from "react-router-dom";
import BorrowRecord from "./BorrowRecord";
import ChangePwd from "./ChangePwd";
import DealRecord from "./DealRecord";


const MyPageForm = () =>{

    

    return(
        <div>
            <Link to={"/home"}>homepage</Link>
            <div>
                <button>거래 기록</button>
                <button>대출 기록</button>
                <button>비밀번호 변경</button>
            </div>
            <DealRecord/>
            <BorrowRecord/>
            <ChangePwd/>
        </div>
    )
}

export default MyPageForm;