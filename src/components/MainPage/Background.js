import React, {Component} from 'react';
import background__image from "./Image/background__image.jpg"
import "./MainPage.css";
import {Link} from "react-router-dom";



class Background extends Component{
    render() {
        return (
            <div>
                <div className="overLayout"></div>
                <img src = {background__image} className="background__image" alt='React'/>
            </div>
         );
    }
}

export default Background;
