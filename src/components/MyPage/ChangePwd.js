import React from "react";
import { Link } from "react-router-dom";


const ChangePwd = () =>{
    return(
        <div>
            <div>변경 div</div>
            <div>
                <input placeholder="현재 비밀번호"/>
                <input placeholder="새 비밀번호"/>
                <input placeholder="새 비밀번호 확인"/>
                <button>취소</button>
                <button>변경</button>
            </div>
            
        </div>
    )
}

export default ChangePwd;