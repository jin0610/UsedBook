import React, {Component} from 'react';
import "./Header.css"




class Header extends Component{
    render() {
        return (
          
            <header className='header'>
              

              <div className='header__gnb'>
                <ul>
                  <li><a href="#" >Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">About</a></li>
                  <li className='button__1'><a href="#">Login</a></li>
                  <li className='button__2'><a href="#">Sign-up</a></li>
                  
                </ul>
              </div>

            </header>

            
           

         );
    }
}

export default Header;
