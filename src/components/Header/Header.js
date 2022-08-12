import React, {Component} from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

class Header extends Component{
    render() {
        return (
            <header className="header">
                <ul>
                    <div className="header__logo">
                        <li><h1 href="#">NAME</h1></li>
                        <li><p href="#">book store</p></li>
                    </div>
                    <div className="header__list">
                        <li><a href={'/home'}>home</a></li>
                        <li><a href={() => false}>efgh</a></li>
                        <li><a href={'/mypage'}>mypage</a></li>
                        <li><a href={'/'}>logout</a></li>
                        
                    </div>
                </ul>
            </header>
    );
  }
}

export default Header;
