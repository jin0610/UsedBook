import React, {Component} from 'react';
import "./SignUp.css";
import {Link} from "react-router-dom";

class SignUp extends Component{
    render() {
        return (
            <div className="signUp">
            <p className = "signUp__title">JOIN</p>
    
            <form action="">
                <table>
                    <tr>
                        <td className="signUp__menu"><label for="id">아이디 *</label></td>
                        <td>
                            <input type="text" id="id" name="id" required autocomplete="off"></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="signUp__menu"><label for="password">비밀번호 *</label></td>
                        <td>
                            <input type="password" id="password" name="password" required autocomplete="off"></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="signUp__menu"><label for="name">이름 *</label></td>
                        <td>
                            <input type="text" id="name" name="name" required autocomplete="off"></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="signUp__menu"><label for="studentNumber">학번 *</label></td>
                        <td>
                            <input type="text" id="studentNumber" name="studentNumber" required autocomplete="off"></input>
                        </td> 
                    </tr>
                    <tr>
                        <td className="signUp__menu"><label for="email">이메일 *</label></td>
                        <td>
                            <input type="email" id="email" name="email" required autocomplete="off" placeholder="abcd@naver.com"></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="signUp__menu"><label for="phoneNumber">핸드폰번호 *</label></td>
                        <td>
                            <input type="tel" id="phoneNumber" name="phoneNumber" required autocomplete="off" placeholder="123-456-789"></input>
                        </td>
                    </tr>
                </table>
                
                <div className="signUp__button">
                    <input type="submit"value="회원가입"></input>
                </div>
            </form>
        </div>
         );
    }
}

export default SignUp;
