import React from 'react'
import {Link } from "react-router-dom";

function Leftnav() {
  return (
    <div>
      <div className='Leftnav'>
        <div className='Dash'>
          
          <Link to="/">Log In</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/Registration">Register</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/income">Income</Link>            
          <Link to="/Addincome">Add Income</Link>
          

        </div>
      </div>
    </div>
  )
}

export default Leftnav