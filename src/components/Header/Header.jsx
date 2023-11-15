import React from 'react' 
import './Header.css'
import { NavLink } from 'react-router-dom'
import Crito from '../../assets/images/Crito-logo.svg'

const header = () => {
  return (
    <header>
    <div class="Container">
        <img src={Crito} />

        <div class="bigbox">
            <div class="topbox">
                <div class="contact">
                     <p><i class="fa-solid fa-phone-volume"></i>
                    +46 (8) 121 470 50</p>
                     <p><i class="fa-regular fa-envelope"></i>
                    info@crito.com</p>
                    <p><i class="fa-solid fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM</p>
                </div>
            

            <div class="socialmedia">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
          
            <div class="bottonbox">

                <div class="menu">
                    <NavLink to="/">Home </NavLink>
                    <NavLink to="/Services">Services </NavLink>
                    <NavLink to="/News">News </NavLink>
                    <NavLink to="/Contact">Contact </NavLink>
                   
                </div>

                    <a class="loginbutton" href="#">
                        Login <i class="fa-solid fa-arrow-right"></i>
                    </a>

                
            </div>
       
        </div>
    </div>
    </header>
  )
}

export default header