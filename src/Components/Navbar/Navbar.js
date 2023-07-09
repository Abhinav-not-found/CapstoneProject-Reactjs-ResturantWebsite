import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import pizza from "./pizza.png"
export default function Navbar() {

  return (
    <div>
        <nav id='nav'>
            <div id='logo'>
                  
                  <p> <img id='pizza_icon' src={pizza}></img>Slice</p>
                  
            </div>
            <div id='menu'>
                <ul >
                  <li><NavLink className='menu-item' to='/'>HOME</NavLink></li>
                  <li><NavLink className='menu-item' to='/about'>ABOUT</NavLink></li>
                  <li><NavLink className='menu-item' to='/order'>ORDER</NavLink></li>
                  <li><NavLink className='menu-item' to='/dishes'>MENU</NavLink></li>
                  <li><NavLink className='menu-item' to='/review'>REVIEW</NavLink></li>
                </ul>
            </div>
            <div className='hamburger'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
           
           
            
        </nav>
    </div>
  )
}
