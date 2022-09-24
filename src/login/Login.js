import React, {Component} from "react";
import "./Login.css";
import "../reset.css"



class Login extends Component{
    render() {
      return(
        <div className="box">
			<form action="" method="post">
				<div className="login__information">
					<a><label for="id">ID</label></a>
					<input type="text" id="id" name="user_id"/>
				</div>
				<div className="login__information"> 
				<a><label for="pwd">PWD</label></a>
					<input type="password" id="pwd" name="user_pwd"/>
				</div>
				<div className="login__button">
					<a><button type="submit">Login</button></a>
				</div>
				<div className="login__forgot">
				<li>아이디를 잊으셨나요? <a href="#">아이디 찾기</a></li>
				<li>비밀번호를 잊으셨나요? <a href="#">비밀번호 찾기</a></li>
				</div>
			</form>
		</div>
      )
    }
  }

  export default Login;