import React from 'react'
import { Link } from 'react-router-dom'

function LeftNavbar() {
  return (
    <div className='Leftnav'>
      
      <div className='links'>
            <Link to="/">Log In</Link>
            <hr />
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Registration">Register</Link>
            <Link to="/income">Income</Link>            
            <hr />
            <Link to="/Profile">Profile</Link>
      </div>

    </div>
  )
}

export default LeftNavbar