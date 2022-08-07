import React from "react";
import "./Mypage.css";

const BorrowRecord = () =>{
    return(
        <div>
            <div>대출 기록</div>
            <div>
                <img className="BorrowBookImg" src="https://newsimg.sedaily.com/2022/05/12/265XXK6D83_1.jpg"></img>
                <p>이름</p>
                <p>대출일</p>
                <p>반납일</p>
                <p>연체 여부(+3)</p>
            </div>
        </div>
    )
}

export default BorrowRecord;