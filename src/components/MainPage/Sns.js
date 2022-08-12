import React, {Component} from 'react';
import "./MainPage.css";
import {Link} from "react-router-dom";
//import ion-icon from "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"


class Sns extends Component{
    render() {
        return (
            <div class="sns"> 
                <ul class="sns__list">
                    <li>
                        <a href = "https://www.facebook.com/" className='logo-facebook  '>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href = "https://twitter.com/">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href = "https://www.instagram.com/">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sns;
