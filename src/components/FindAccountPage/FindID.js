import React, {Component} from "react";
import "./FindAccount.css";
import {Link} from "react-router-dom";


class FindID extends Component{
  render() {
    return (
      <div className="content">
        <div className="findId">
            <p className = "findId__title">아이디 찾기</p>
            <form action="데이터전달할 페이지이름" method = "post"
                onSubmit = {function(e){
                e.preventDefault();
                alert('아이디가 무엇인지 알려주기');
              }}//.bind(this)}
            >
              
                <table>
                    <tr>
                        <td className="findId__menu"><label for="name">이름 *</label></td>
                        <td>
                            <input type="text" id="name" name="name" required autocomplete="off"></input>
                        </td>
                    </tr>

                    <tr>
                        <td className="findId__menu"><label for="student_number">학번 *</label></td>
                        <td>
                            <input type='text' id="student_number" name="student_number" required autocomplete="off"></input>
                        </td>
                    </tr>
                </table>

                <div className="findId__button">
                    <input type="submit"value="확인"></input>
                </div>
            </form>
        </div>
      </div>
    );
  }
}
export default FindID;
