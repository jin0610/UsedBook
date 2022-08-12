import React, {Component} from 'react';
import "./MainPage.css";
import {Link} from "react-router-dom";

class Contents extends Component{
    render() {
        return (
            <div class = "contents">
                <p class = "contents__name">Logo Name</p>
                <p class = "contents__details">
                    The official website for buying and selling<br></br>major and liberal arts books within university departments.
                </p>

                <div class="contents__login">
                    <form action="데이터전달할 페이지이름" method = "post"
                        onSubmit = {function(e){
                        e.preventDefault();
                    }}//.bind(this)}
              >
                        <div class="login__inform">
                            <input type="text" autocomplete="off" placeholder="STUDENT NUMBER" required></input></div>
                        <div class="login__inform">
                            <input type="password" autocomplete="off" placeholder="PASSWORD" required></input></div>
                        <div class="login__btn">
                            <button type="submit"><Link to={'/home'}>LOGIN</Link></button>
                        </div>
                    </form>
                    <div class="login__caption">
                        <Link to={'/join'}><a href={() => false}>
                            Do you want to sign up?</a></Link>
                    </div>
                    <div class="login__account">
                        <Link to={'/account'}><a href={() => false}> 
                            Did you forget your account?</a></Link>
                    </div>
                </div>
            </div>
    );
  }
}

export default Contents;
