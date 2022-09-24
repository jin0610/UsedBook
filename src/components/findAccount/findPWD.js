import React, {Component} from "react";
import "./findAccount.css";
import "../reset.css";


class Find__PWD extends Component{
    render() {
      return(
        <div className="box">
			<form action="" method="post">
				<div className="information">
					<a><label for="id">ID</label></a>
					<input type="text" id="id" name="user_id"/>
				</div>
				<div className="information"> 
				<a><label for="number">STUDENT<br></br> NUMBER</label></a>
					<input type="number" id="number" name="user_student_number"/>
				</div>
				<div className="find__button">
					<a><button type="submit">FIND</button></a>
				</div>
				<div className="others">
				
                <li> 로그인을 하러 가기 <a href="#">로그인</a></li>
				</div>
			</form>
		</div>
      )
    }
  }

  export default Find__PWD;