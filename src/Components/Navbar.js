import React from 'react'
import { Link, } from "react-router-dom";

function Navbar() {
  return (
    <div className="Maindiv">
      <div className='topnav'>
        <div className='logo'>Hospital1</div>
        <div className='Listitems'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>                                  
          </ul>
        </div>

      </div> 
      <div className='Leftnav'>
        <div className='Dash'>
        <ul>
            <li><Link to="/">Signup</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/Registration">Register</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
        </ul>

        </div>
      </div>
    </div>
    
  )
}

export default Navbar