import axios from "axios";
import React, { useEffect, useState } from "react";
import "./QnAForm.css";

const QnAForm = props =>{
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>작성자</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>첫번째 게시글</td>
                        <td>2022-07-15</td>
                        <td>홍길동</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>두번째 게시글</td>
                        <td>2022-07-15</td>
                        <td>김개똥</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>세번째 게시글</td>
                        <td>2022-07-15</td>
                        <td>이말똥</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default QnAForm;
